import { Entity, EntitySet } from './entity'

export class User implements Entity<UserId, [string, string]> {
  id: UserId
  value: [string, string]

  constructor(id: UserId, name: string, surname: string) {
    this.id = id
    this.value = [name, surname]
  }
}

export class UserId {
  email: string

  constructor(email: string) {
    this.email = email
  }
}

export class UserEntrySet extends EntitySet<User> {}
