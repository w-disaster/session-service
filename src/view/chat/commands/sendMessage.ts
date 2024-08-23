import { Namespace } from 'socket.io'
import { Ack, TextMessage } from '../../../model/message'
import { chatReaction } from '../utils'
import { ChatController } from '../../../controllers/chatController'

export function sendMessageCommand(
  chatNamespace: Namespace,
  token: string,
  room: string,
  chatController: ChatController
): (message: any, ack: any) => void {
  return (data, ack) => {
    const { message } = data
    chatReaction(
      chatController.sendMessage(token, message),
      (textMessage: TextMessage) => {
        chatNamespace.to(room).emit('textMessage', textMessage)
        ack(Ack.OK)
      },
      ack
    )
  }
}
