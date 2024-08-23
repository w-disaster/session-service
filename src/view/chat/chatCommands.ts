import { Namespace, Socket } from 'socket.io'
import { ChatController } from '../../controllers/chatController'
import { commandListener } from '../utils'
import { Ack, Message, NotificationMessage, TextMessage } from '../../model/message'

export interface SessionNamespace {
  registerCommands(namespace: Namespace): void
}

export class ChatNamespace implements SessionNamespace {
  chatManager: ChatController

  constructor() {
    this.chatManager = new ChatController()
  }

  /**
   * Chat Command Listener with default message check.
   * @param socket
   * @param command
   * @param commandCallback
   */
  chatCommandListener(
    socket: Socket,
    command: string,
    commandCallback: (argv: any, ack: any) => void
  ) {
    // TODO: implement check
    commandListener(socket, command, () => true, commandCallback)
  }

  chatReaction<X extends void | Message>(
    promise: Promise<X>,
    successReaction: (x: X) => void,
    ack: any
  ) {
    promise
      .then((message: X) => {
        successReaction(message)
        ack(Ack.OK)
      })
      .catch(() => Ack.FAILURE)
  }

  sendMessageCommand(
    chatNamespace: Namespace,
    token: string,
    room: string
  ): (message: any, ack: any) => void {
    return (data, ack) => {
      const { message } = data
      this.chatReaction(
        this.chatManager.sendMessage(token, message),
        (textMessage: TextMessage) => {
          chatNamespace.to(room).emit('textMessage', textMessage)
          ack(Ack.OK)
        },
        ack
      )
    }
  }

  leaveRoomCommand(
    chatNamespace: Namespace,
    socket: Socket,
    room: string
  ): (message: any, ack: any) => void {
    return (message, ack) => {
      this.chatReaction(
        this.chatManager.leaveClientFromRoom(room),
        (notificationMessage: NotificationMessage) => {
          socket.leave(room /*, token*/)
          chatNamespace.to(room).emit('notificationMessage', notificationMessage)
          ack(Ack.OK)
        },
        ack
      )
    }
  }

  joinCommand(
    chatNamespace: Namespace,
    socket: Socket,
    token: string
  ): (message: any, ack: any) => void {
    return (message, ack) => {
      const { room } = message
      console.log('joined')

      this.chatReaction(
        this.chatManager.isClientJoined(/*token*/),
        () => {
          this.chatReaction(
            this.chatManager.joinClientToRoom(token, room, socket),
            (notificationMessage: NotificationMessage) => {
              chatNamespace.to(room).emit('notificationMessage', notificationMessage)
              socket.join(room)
              this.chatCommandListener(
                socket,
                'leaveRoom',
                this.leaveRoomCommand(chatNamespace, socket, room)
              )
              this.chatCommandListener(
                socket,
                'sendMessage',
                this.sendMessageCommand(chatNamespace, token, room)
              )
            },
            ack
          )
        },
        ack
      )
    }
  }

  userTokenCommand(chatNamespace: Namespace, socket: Socket): (message: any, ack: any) => void {
    return (message, ack) => {
      const { token } = message
      this.chatCommandListener(socket, 'joinRoom', this.joinCommand(chatNamespace, socket, token))
      ack(Ack.OK)
    }
  }

  disconnectionCommand(socket: Socket): (message: any) => void {
    return (message) => socket.disconnect()
  }

  /**
   * Register Chat Commands to the given Namespace
   * @param chatNamespace
   */
  registerCommands(chatNamespace: Namespace) {
    commandListener(
      chatNamespace,
      'connection',
      () => true,
      (socket: Socket) => {
        this.chatCommandListener(socket, 'userToken', this.userTokenCommand(chatNamespace, socket))
        this.chatCommandListener(socket, 'disconnect', this.disconnectionCommand(socket))
      }
    )
  }
}
