import { Entity, EntitySet } from './entity'
import { Message, MessageContent } from './message'
import { User, UserEntitySet } from './user'

export interface Chat {
  addMessage(message: Message<MessageContent>): void

  get getMessages(): Message<MessageContent>[]
}

export class ChatImpl implements Chat {
  private readonly messages: Message<MessageContent>[]

  constructor() {
    this.messages = []
  }

  addMessage(message: Message<MessageContent>): void {
    this.messages.push(message)
  }
  get getMessages(): Message<MessageContent>[] {
    return this.messages
  }
}

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

export interface Room extends Entity<RoomId, RoomEntry> {
  isUserJoined(user: User): boolean

  joinUser(user: User): boolean

  leaveUser(user: User): boolean

  sendMessage(sender: User, message: Message<MessageContent>): void
}

export class RoomImpl implements Room {
  id: RoomId
  value?: RoomEntry | undefined

  constructor(id: RoomId, users: UserEntitySet, chat: Chat) {
    this.id = id
    this.value = new RoomEntry(users, chat)
  }

  isUserJoined(user: User): boolean {
    const users = this.value?.getX
    if (users) {
      return users.contains(user.id)
    }
    return false
  }

  joinUser(user: User): boolean {
    if (!this.isUserJoined(user)) {
      this.value?.getX.add(user)
      return true
    }
    return false
  }

  leaveUser(user: User): boolean {
    if (this.isUserJoined(user)) {
      if (this.value) {
        return this.value.getX.remove(user.id)
      }
    }
    return false
  }

  sendMessage(sender: User, message: Message<MessageContent>): void {
    this.value?.getY.addMessage(message)
  }
}

export class RoomEntitySet extends EntitySet<Room> {}
