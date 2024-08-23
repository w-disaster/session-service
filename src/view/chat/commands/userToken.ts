import { Namespace, Socket } from 'socket.io'
import { chatCommandListener } from '../utils'
import { joinCommand } from './join'
import { ChatController } from '../../../controllers/chatController'
import { Ack } from '../../../model/message'

export function userTokenCommand(
  chatNamespace: Namespace,
  socket: Socket,
  chatController: ChatController
): (message: any, ack: any) => void {
  return (message, ack) => {
    const { token } = message
    chatCommandListener(
      socket,
      'joinRoom',
      joinCommand(chatNamespace, socket, token, chatController)
    )
    ack(Ack.OK)
  }
}
