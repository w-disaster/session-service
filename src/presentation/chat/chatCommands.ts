import { Namespace, Socket } from 'socket.io'
import { ChatController } from '../../application/controllers/chatControllers/chatController'
import { ChatControllerImpl } from '../../application/controllers/chatControllers/chatControllerImpl'
import { ChatReactions, ChatReactionsImpl } from './chatReactions'
// import { io } from "../..";

/**
 * Command listener util function
 * @param sn
 * @param command
 * @param verifyCommand
 * @param commandCallback
 */
export function commandListener<X>(
  sn: Socket | Namespace,
  command: string,
  verifyCommand: (argv: X) => boolean,
  commandCallback: (argv: X) => void
) {
  sn.on(command, (argv: X) => {
    if (verifyCommand(argv)) {
      commandCallback(argv)
    }
  })
}

export function registerChatCommands(chatNamespace: Namespace) {
  /**
   * Chat Command Listener with default message check.
   * @param socket
   * @param command
   * @param commandCallback
   */
  function chatCommandListener(
    socket: Socket,
    command: string,
    commandCallback: (argv: string) => void
  ) {
    // TODO: implement check
    commandListener(socket, command, () => true, commandCallback)
  }

  commandListener(
    chatNamespace,
    'connection',
    () => true,
    (socket: Socket) => {
      const chatReactions: ChatReactions = new ChatReactionsImpl(chatNamespace, socket)
      const chatController: ChatController = new ChatControllerImpl(chatReactions)

      //  Register Join Room listener
      chatCommandListener(socket, 'joinRoom', (message: any) => {
        const { room } = message
        chatController.joinRoom(room).then(() => {
          // Register Leave Room listener
          chatCommandListener(socket, 'leaveRoom', (message: string) =>
            chatController.leaveRoom(message)
          )
          // Register Send Message listener
          chatCommandListener(socket, 'sendMessage', (data: any) => {
            const { room, message } = data
            chatController.sendMessage(room, message)
          })
        })
      })
    }
  )
}
