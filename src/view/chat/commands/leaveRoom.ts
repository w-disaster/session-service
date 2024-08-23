import { Namespace, Socket } from 'socket.io'
import { Ack, NotificationMessage } from '../../../model/message'
import { ChatController } from '../../../controllers/chatController'
import { chatReaction } from '../utils'

/**
 * Leave command.
 * Using the token and socket, leaves the user to the specified room.
 * @param chatNamespace
 * @param socket
 * @param room
 * @param chatController
 * @returns
 */
export function leaveRoomCommand(
  chatNamespace: Namespace,
  socket: Socket,
  room: string,
  chatController: ChatController
): (message: any, ack: any) => void {
  return (message, ack) => {
    chatReaction(
      chatController.leaveClientFromRoom(room),
      (notificationMessage: NotificationMessage) => {
        socket.leave(room /*, token*/)
        chatNamespace.to(room).emit('notificationMessage', notificationMessage)
        ack(Ack.OK)
      },
      ack
    )
  }
}
