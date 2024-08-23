import { Namespace, Socket } from 'socket.io'
import { ChatController } from '../../controllers/chatController'
import { commandListener } from '../utils'
import { NotificationMessage, TextMessage } from '../../model/message'

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
  chatCommandListener(socket: Socket, command: string, commandCallback: (argv: string) => void) {
    // TODO: implement check
    commandListener(socket, command, () => true, commandCallback)
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
        socket.on('userToken', (message, ack) => {
          const { token } = message

          this.chatManager
            .isClientJoined(/*token*/)
            .then(() => {
              ack(true)
              this.chatCommandListener(socket, 'joinRoom', (message: any) => {
                const { room } = message

                this.chatManager
                  .joinClientToRoom(token, room, socket)
                  .then((notificationMessage: NotificationMessage) => {
                    chatNamespace.to(room).emit('notificationMessage', notificationMessage)
                    socket.join(room)

                    this.chatCommandListener(socket, 'leaveRoom', (message: any) => {
                      this.chatManager
                        .leaveClientFromRoom(room)
                        .then((notificationMessage: NotificationMessage) => {
                          socket.leave(room /*, token*/)
                          chatNamespace.to(room).emit('notificationMessage', notificationMessage)
                        })
                    })

                    this.chatCommandListener(socket, 'sendMessage', (data: any) => {
                      const { message } = data
                      this.chatManager
                        .sendMessage(token, message)
                        .then((textMessage: TextMessage) => {
                          chatNamespace.to(room).emit('textMessage', textMessage)
                        })
                    })
                  })
              })
            })
            .catch(() => ack(false))
        })

        // Client disconnects
        this.chatCommandListener(socket, 'disconnect', (message: any) => {
          socket.disconnect()
        })
      }
    )
  }
}
