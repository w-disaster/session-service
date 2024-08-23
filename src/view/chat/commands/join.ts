import { Namespace, Socket } from 'socket.io'
import { NotificationMessage } from '../../../model/message'
import { ChatController } from '../../../controllers/chatController'
import { chatCommandListener, chatReaction } from '../utils'
import { leaveRoomCommand } from './leaveRoom'
import { sendMessageCommand } from './sendMessage'

export function joinCommand(
  chatNamespace: Namespace,
  socket: Socket,
  token: string,
  chatController: ChatController
): (message: any, ack: any) => void {
  return (message, ack) => {
    const { room } = message
    console.log('joined')

    chatReaction(
      chatController.isClientJoined(/*token*/),
      () => {
        chatReaction(
          chatController.joinClientToRoom(token, room, socket),
          (notificationMessage: NotificationMessage) => {
            chatNamespace.to(room).emit('notificationMessage', notificationMessage)
            socket.join(room)
            chatCommandListener(
              socket,
              'leaveRoom',
              leaveRoomCommand(chatNamespace, socket, room, chatController)
            )
            chatCommandListener(
              socket,
              'sendMessage',
              sendMessageCommand(chatNamespace, token, room, chatController)
            )
          },
          ack
        )
      },
      ack
    )
  }
}
