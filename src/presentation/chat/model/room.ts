import { Entry, Id, Repository } from './repository'
import { WsClientRepository } from './client'

export class RoomId implements Id {
  roomName: string
  namespaceName: string

  constructor(roomName: string, namespaceName: string) {
    this.roomName = roomName
    this.namespaceName = namespaceName
  }
}

export class Room implements Entry<RoomId, WsClientRepository> {
  id: RoomId
  value: WsClientRepository

  constructor(id: RoomId, value: WsClientRepository) {
    this.id = id
    this.value = value
  }
}

export class RoomRepository extends Repository<Room, RoomId, WsClientRepository> {}
