import { WsClientEntrySet } from './client'
import { Entity, EntitySet, Id } from './entity'

export class RoomId implements Id {
  roomName: string

  constructor(roomName: string) {
    this.roomName = roomName
  }
}

export class Room implements Entity<RoomId, WsClientEntrySet> {
  id: RoomId
  value: WsClientEntrySet

  constructor(id: RoomId, value: WsClientEntrySet) {
    this.id = id
    this.value = value
  }
}

export class RoomEntitySet extends EntitySet<Room, RoomId, WsClientEntrySet> {}
