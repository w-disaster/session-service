import { Socket } from 'socket.io'
import { Entry, Id, Repository } from './repository'

export class WsClient implements Entry<WsClientId, undefined> {
  id: WsClientId

  constructor(id: WsClientId) {
    this.id = id
  }
}

export class WsClientId implements Id {
  socket: Socket // id
  token: string // id

  constructor(socket: Socket, token: string) {
    this.socket = socket
    this.token = token
  }
}

export class WsClientRepository extends Repository<WsClient, WsClientId, undefined> {}
