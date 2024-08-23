import { Socket } from 'socket.io'
import { Entity, EntitySet } from './entity'

export class WsClient implements Entity<WsClientId, [Socket, string]> {
  id: WsClientId
  value: [Socket, string]

  constructor(id: WsClientId, socket: Socket, token: string) {
    this.id = id
    this.value = [socket, token]
  }
}

export class WsClientId {
  email: string

  constructor(email: string) {
    this.email = email
  }
}

export class WsClientEntrySet extends EntitySet<WsClient> {}
