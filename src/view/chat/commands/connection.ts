import { Namespace, Socket } from 'socket.io'
import { chatCommandListener, commandListener } from '../utils'
import { disconnectionCommand } from './disconnect'
import { userTokenCommand } from './userToken'
import { ChatController } from '../../../controllers/chatController'

export function connectionCommand(chatNamespace: Namespace, chatController: ChatController) {
  commandListener(
    chatNamespace,
    'connection',
    () => true,
    (socket: Socket) => {
      chatCommandListener(
        socket,
        'userToken',
        userTokenCommand(chatNamespace, socket, chatController)
      )
      chatCommandListener(socket, 'disconnect', disconnectionCommand(socket))
    }
  )
}
