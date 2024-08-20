import { Entry, Id, Repository } from '../repository';


export class SessionId implements Id {

    sessionName: string;

    constructor(sessionName: string) {
        this.sessionName = sessionName;
    }

}

export class Session implements Entry<SessionId, UserRepository> {

    id: SessionId;
    value: UserRepository;

    constructor(id: SessionId, value: UserRepository) {
        this.id = id;
        this.value = value;
    }

}

export class UserId implements Id {

    email: string;

    constructor(email: string) {
        this.email = email;
    }

}

export class User implements Entry<UserId, [string, string]> {

    id: UserId;
    name: [string, string];

    constructor(id: UserId, name: string, surname: string) {
        this.id = id;
        this.name = [name, surname];
    }

}

export class UserRepository extends Repository<User, UserId, [string, string]> { }


export class SessionRepository extends Repository<Session, SessionId, UserRepository> { }