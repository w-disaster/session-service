import { ChatReactions, EmitMessage } from '../../../presentation/chat/chatReactions'
import { ChatController } from './chatController'

export class ChatControllerImpl implements ChatController {
  //clientList: Array<string>;
  chatReactions: ChatReactions

  constructor(chatReactions: ChatReactions) {
    this.chatReactions = chatReactions
  }

  async joinRoom(roomId: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.joinRoom()
      resolve()
    })
  }

  async leaveRoom(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.leaveRoom()
      resolve()
    })
  }

  async sendMessage(roomId: string, message: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.emitMessageToRoom(new EmitMessage(message))
      resolve()
    })
  }
}
