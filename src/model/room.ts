import { UserEntrySet } from './user'
import { Entity, EntitySet } from './entity'

export class RoomId {
  roomName: string

  constructor(roomName: string) {
    this.roomName = roomName
  }
}

export class Room implements Entity<RoomId, UserEntrySet> {
  id: RoomId
  value: UserEntrySet

  constructor(id: RoomId, value: UserEntrySet) {
    this.id = id
    this.value = value
  }
}

export class RoomEntitySet extends EntitySet<Room> {}
