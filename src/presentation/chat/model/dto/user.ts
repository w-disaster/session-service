import { Entry, Id, Repository } from '../repository'

export class UserId implements Id {
  email: string

  constructor(email: string) {
    this.email = email
  }
}

export class User implements Entry<UserId, [string, string]> {
  id: UserId
  name: [string, string]

  constructor(id: UserId, name: string, surname: string) {
    this.id = id
    this.name = [name, surname]
  }
}

export class UserRepository extends Repository<User, UserId, [string, string]> {}
