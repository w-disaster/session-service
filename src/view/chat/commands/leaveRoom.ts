import { Namespace, Socket } from 'socket.io'
import { NotificationMessage } from '../../../model/message'
import { ChatController } from '../../../controllers/chatController'
import { chatReaction } from '../utils'
import { SerializerImpl } from '../../../model/presentation/serialization/messageSerializer'

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
): () => void {
  return () => {
    chatReaction(
      chatController.leaveUserFromRoom(room),
      (notificationMessage: NotificationMessage) => {
        socket.leave(room /*, token*/)
        chatNamespace
          .to(room)
          .emit('notificationMessage', new SerializerImpl().serialize(notificationMessage))
      }
    )
  }
}
