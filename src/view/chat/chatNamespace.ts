import { Namespace } from 'socket.io'
import { ChatController } from '../../controllers/chatController'
import { connectionCommand } from './commands/connection'

export interface SessionNamespace {
  registerCommands(namespace: Namespace): void
}

export class ChatNamespace implements SessionNamespace {
  chatController: ChatController

  constructor() {
    this.chatController = new ChatController()
  }

  /**
   * Register Chat Commands to the given Namespace
   * @param chatNamespace
   */
  registerCommands(chatNamespace: Namespace) {
    connectionCommand(chatNamespace, this.chatController)
  }
}
