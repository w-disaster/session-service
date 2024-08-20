import { Session } from '../../../presentation/chat/model/dto/session'
import { User } from '../../../presentation/chat/model/dto/user'
import { RoomReactions, EmitMessage } from '../../../presentation/chat/roomReactions'

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
   * @param chatUser
   */
  leaveRoom(chatUser: User): Promise<void>
}

export class ChatControllerImpl implements ChatController {
  //clientList: Array<string>;

  chatReactions: RoomReactions
  session: Session

  constructor(chatReactions: RoomReactions, session: Session) {
    this.chatReactions = chatReactions
    this.session = session
  }

  async joinRoom(chatUser: User): Promise<void> {
    return new Promise<void>((resolve) => {
      this.sendMessage(`user ${chatUser.name} joined session`).then(() => {
        this.chatReactions.joinRoom()
        resolve()
      })
    })
  }

  async leaveRoom(chatUser: User): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.leaveRoom()
      this.sendMessage(`user ${chatUser.name} left session`).then(() => {
        resolve()
      })
    })
  }

  async sendMessage(message: string): Promise<void> {
    return new Promise<void>((resolve) => {
      this.chatReactions.emitMessageToRoom(new EmitMessage(message))
      resolve()
    })
  }
}
