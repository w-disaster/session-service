import { Room, RoomEntitySet, RoomId } from '../model/room'
import { WsClient, WsClientEntrySet, WsClientId } from '../model/client'
import { Notification, NotificationMessage, TextMessage } from '../model/message'

export class ChatController {
  rooms: RoomEntitySet

  constructor() {
    this.rooms = new RoomEntitySet([])
  }

  //private validateToken(token: string): boolean

  //private getUserInfoFromToken(token: string): [email, name, surname]

  private getUserEmailFromToken(/*token: string*/): WsClientId {
    return new WsClientId('me@gmail.com')
  }

  private getUserFromToken(/*token: string*/): WsClient {
    return new WsClient(this.getUserEmailFromToken(), 'Name', 'Surname')
  }

  async isClientJoined(/*token: string*/): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.rooms.values.some((room) => room.value.contains(this.getUserEmailFromToken()))) {
        reject()
      } else {
        resolve()
      }
    })
  }

  async joinClientToRoom(token: string, room: string): Promise<NotificationMessage> {
    return new Promise((resolve) => {
      const client: WsClient = this.getUserFromToken(/*token*/)
      const roomId: RoomId = new RoomId(room)
      if (!this.rooms.add(new Room(roomId, new WsClientEntrySet([client])))) {
        this.rooms.find(roomId)?.value.add(client)
      }
      resolve(new NotificationMessage(client.value[0], client.value[1], Notification.JOINROOM))
    })
  }

  async sendMessage(token: string, message: string): Promise<TextMessage> {
    return new Promise((resolve) => {
      // getUserInfoFromToken
      resolve(new TextMessage('Name', 'Surname', message))
    })
  }

  async leaveClientFromRoom(
    /*token: string,*/
    room: string
  ): Promise<NotificationMessage> {
    return new Promise((resolve) => {
      const roomId: RoomId = new RoomId(room)
      this.rooms.find(roomId)?.value.remove(this.getUserEmailFromToken())
      resolve(new NotificationMessage('Name', 'Surname', Notification.LEAVEROOM))
    })
  }
}
