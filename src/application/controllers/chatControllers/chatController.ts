import { ChatReactions, EmitMessage } from '../../../presentation/chat/chatReactions'
import { Room, User } from '../userController'

export interface ChatController {
  /**
   * Join the user to the room
   * @param chatUser
   */
  joinRoom(chatUser: User): Promise<void>

  /**
   * Send message to the room chat
   * @param message
   */
  sendMessage(message: string): Promise<void>

  /**
   * Leave the room
   * @param message
   */
  leaveRoom(message: string): Promise<void>
}

export class ChatControllerImpl implements ChatController {
  //clientList: Array<string>;

  chatReactions: ChatReactions
  room: Room

  constructor(chatReactions: ChatReactions, room: Room) {
    this.chatReactions = chatReactions
    this.room = room
  }

  async joinRoom(chatUser: User): Promise<void> {
    return new Promise<void>((resolve) => {
      this.sendMessage(`user ${chatUser.email} joined session`).then(() => {
        this.chatReactions.joinRoom()
        resolve()
      })
    })
  }

  async leaveRoom(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.leaveRoom()
      resolve()
    })
  }

  async sendMessage(message: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.emitMessageToRoom(new EmitMessage(message))
      resolve()
    })
  }
}
