import { ChatImpl, RoomEntitySet, RoomId, RoomImpl } from '../model/room'
import { Notification, NotificationMessage, TextMessage } from '../model/message'
import { User, UserEntitySet, UserId } from '../model/user'

export class ChatController {
  rooms: RoomEntitySet

  constructor() {
    this.rooms = new RoomEntitySet([])
  }

  //private validateToken(token: string): boolean

  //private getUserInfoFromToken(token: string): [email, name, surname]

  private getUserEmailFromToken(/*token: string*/): UserId {
    return new UserId('me@gmail.com')
  }

  private getUserFromToken(/*token: string*/): User {
    return new User(this.getUserEmailFromToken(), 'Name', 'Surname')
  }

  async isUserJoined(/*token: string*/): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.rooms.values.some((room) => room.isUserJoined(this.getUserFromToken()))) {
        reject()
      } else {
        resolve()
      }
    })
  }

  async joinUserToRoom(token: string, room: string): Promise<NotificationMessage> {
    return new Promise((resolve) => {
      const user: User = this.getUserFromToken(/*token*/)
      const roomId: RoomId = new RoomId(room)

      if (!this.rooms.add(new RoomImpl(roomId, new UserEntitySet([user]), new ChatImpl()))) {
        this.rooms.find(roomId)?.joinUser(user)
      }
      resolve(new NotificationMessage(user, Notification.JOINROOM))
    })
  }

  async sendMessage(token: string, message: string): Promise<TextMessage> {
    return new Promise((resolve) => {
      // getUserInfoFromToken
      const user: User = this.getUserFromToken(/*token*/)
      resolve(new TextMessage(user, message))
    })
  }

  async leaveUserFromRoom(
    /*token: string,*/
    room: string
  ): Promise<NotificationMessage> {
    return new Promise((resolve) => {
      const roomId: RoomId = new RoomId(room)
      const user: User = this.getUserFromToken(/*token*/)
      this.rooms.find(roomId)?.value?.getX.remove(user.id)
      resolve(new NotificationMessage(user, Notification.LEAVEROOM))
    })
  }
}
