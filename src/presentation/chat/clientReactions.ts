import { Namespace } from 'socket.io'
import { WsClient } from './model/client'
import { User } from './model/dto/user'
import { Room } from './model/room'
import { ServerClientMessage } from '../../domain/message/message'

export interface ClientReactions {
  joinRoom(): void

  leaveRoom(): void

  sendDirectMessage(receiver: User, msg: ServerClientMessage): boolean

  sendRoomMessage(msg: ServerClientMessage): boolean
}

export class ClientReactionsImpl implements ClientReactions {
  namespace: Namespace
  client: WsClient
  room: Room

  private findClientFromUser(user: User): WsClient | undefined {
    const roomClients = this.room.value.values
    return roomClients.find((client) => client.email == user.id.email)
  }

  constructor(namespace: Namespace, client: WsClient, room: Room) {
    this.namespace = namespace
    this.client = client
    this.room = room
  }

  joinRoom(): void {
    this.client.id.socket.join(this.room.id.roomName)
  }

  leaveRoom(): void {
    this.client.id.socket.leave(this.room.id.roomName)
  }

  sendDirectMessage(receiver: User, msg: ServerClientMessage) {
    const recvClient = this.findClientFromUser(receiver)
    if (recvClient) {
      if (this.room.value.contains(recvClient.id)) {
        recvClient.id.socket.send('directMessage', msg)
        return true
      }
    }
    return false
  }

  sendRoomMessage(msg: ServerClientMessage) {
    this.namespace.to(this.room.id.roomName).emit('message', msg)
    return true
  }
}
