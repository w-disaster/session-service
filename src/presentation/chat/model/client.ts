import { Socket } from 'socket.io'
import { Entry, Id, Repository } from './repository'

export class WsClient implements Entry<WsClientId, string> {
  id: WsClientId
  email: string

  constructor(id: WsClientId, email: string) {
    this.id = id
    this.email = email;
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

export class WsClientRepository extends Repository<WsClient, WsClientId, string> {}
