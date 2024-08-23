import { Socket } from 'socket.io'
import { Entity, EntitySet, Id } from './entity'

export class WsClient implements Entity<WsClientId, [Socket, string]> {
  id: WsClientId
  value: [Socket, string]

  constructor(id: WsClientId, socket: Socket, token: string) {
    this.id = id
    this.value = [socket, token]
  }
}

export class WsClientId implements Id {
  email: string

  constructor(email: string) {
    this.email = email
  }
}

export class WsClientEntrySet extends EntitySet<WsClient> {}
