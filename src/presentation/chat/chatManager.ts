import { Socket } from 'socket.io'
import { Room, RoomEntitySet, RoomId } from './model/room'
import { WsClient, WsClientEntrySet, WsClientId } from './model/client'
import { Notification, NotificationMessage, TextMessage } from './model/message'

export class ChatManager {
  rooms: RoomEntitySet

  constructor() {
    this.rooms = new RoomEntitySet([])
  }

  //private validateToken(token: string): boolean

  //private getUserInfoFromToken(token: string): [email, name, surname]

  private getClientIdFromToken(token: string): WsClientId {
    return new WsClientId('me@gmail.com')
  }

  async isClientJoined(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.rooms.values.some((room) => room.value.contains(this.getClientIdFromToken(token)))
        ? reject()
        : resolve()
    })
  }

  async joinClientToRoom(
    token: string,
    room: string,
    socket: Socket
  ): Promise<NotificationMessage> {
    return new Promise((resolve) => {
      const client: WsClient = new WsClient(this.getClientIdFromToken(token), socket, token)
      const roomId: RoomId = new RoomId(room)
      if (!this.rooms.add(new Room(roomId, new WsClientEntrySet([client])))) {
        this.rooms.find(roomId)?.value.add(client)
      }
      // getUserInfoFromToken
      resolve(new NotificationMessage('Name', 'Surname', Notification.JOINROOM))
    })
  }

  async sendMessage(token: string, message: string): Promise<TextMessage> {
    return new Promise((resolve) => {
      // getUserInfoFromToken
      resolve(new TextMessage('Name', 'Surname', message))
    })
  }

  async leaveClientFromRoom(
    token: string,
    room: string,
    socket: Socket
  ): Promise<NotificationMessage> {
    return new Promise((resolve) => {
      const roomId: RoomId = new RoomId(room)
      this.rooms.find(roomId)?.value.remove(this.getClientIdFromToken(token))
      resolve(new NotificationMessage('Name', 'Surname', Notification.LEAVEROOM))
    })
  }
}
