import { UserEntitySet } from './user'
import { Entity, EntitySet } from './entity'

export class RoomId {
  roomName: string

  constructor(roomName: string) {
    this.roomName = roomName
  }
}

export class Room implements Entity<RoomId, UserEntitySet> {
  
  id: RoomId
  value: UserEntitySet

  constructor(id: RoomId, value: UserEntitySet) {
    this.id = id
    this.value = value
  }
}

export class RoomEntitySet extends EntitySet<Room> {}
