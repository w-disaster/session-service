import { Entry, Id, Repository } from '../repository'
import { UserRepository } from './user'

export class SessionId implements Id {
  sessionName: string

  constructor(sessionName: string) {
    this.sessionName = sessionName
  }
}

export class Session implements Entry<SessionId, UserRepository> {
  id: SessionId
  value: UserRepository

  constructor(id: SessionId, value: UserRepository) {
    this.id = id
    this.value = value
  }
}

export class SessionRepository extends Repository<Session, SessionId, UserRepository> {}
