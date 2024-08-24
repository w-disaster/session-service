import { Entity, EntitySet } from './entity'

export class WsClient implements Entity<WsClientId, [string, string]> {
  id: WsClientId
  value: [string, string]

  constructor(id: WsClientId, name: string, surname: string) {
    this.id = id
    this.value = [name, surname]
  }
}

export class WsClientId {
  email: string

  constructor(email: string) {
    this.email = email
  }
}

export class WsClientEntrySet extends EntitySet<WsClient> {}
