import { Entity, EntitySet } from './entity'
import { Message, TextMessage } from './message'
import { UserEntitySet } from './user'

export class RoomId {
  roomName: string

  constructor(roomName: string) {
    this.roomName = roomName
  }
}

export class Pair<X, Y> {
  private readonly x: X
  private readonly y: Y

  constructor(x: X, y: Y) {
    this.x = x
    this.y = y
  }

  get getX(): X {
    return this.x
  }

  get getY(): Y {
    return this.y
  }
}

export class RoomEntry extends Pair<UserEntitySet, Chat> {}

export class Chat extends Array<Message<any>> {}

export class Room implements Entity<RoomId, RoomEntry> {

  id: RoomId
  value: RoomEntry

  constructor(id: RoomId, userEntitySet: UserEntitySet, chat: Chat) {
    this.id = id
    this.value = new RoomEntry(userEntitySet, chat)
  }
}

export class RoomEntitySet extends EntitySet<Room> {}
