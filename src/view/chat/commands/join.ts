import { Namespace, Socket } from 'socket.io'
import { NotificationMessage } from '../../../model/message'
import { ChatController } from '../../../controllers/chatController'
import { chatCommandListener, chatReaction } from '../utils'
import { leaveRoomCommand } from './leaveRoom'
import { sendMessageCommand } from './sendMessage'

/**
 * Join Command.
 * Returns a function that joins a socketIO socket to the specified room.
 * After the client successfully joins a room, it enables the client to further:
 * (1) send a message to the room;
 * (2) leave the room.
 * @param chatNamespace
 * @param socket
 * @param token
 * @param chatController
 * @returns
 */
export function joinCommand(
  chatNamespace: Namespace,
  socket: Socket,
  token: string,
  chatController: ChatController
): (message: any, ack: any) => void {
  return (message, ack) => {
    const { room } = message
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
