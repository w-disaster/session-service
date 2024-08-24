export enum Notification {
  JOINROOM,
  LEAVEROOM
}


export class Message<X> {
  private readonly name: string
  private readonly surname: string
  private readonly content: X

  constructor(name: string, surname: string, content: X) {
    this.name = name
    this.surname = surname
    this.content = content
  }

  get senderName(): string {
    return this.name
  }

  get senderSurname(): string {
    return this.surname
  }

  get messageContent(): X {
    return this.content
  }

}

export class NotificationMessage extends Message<Notification> {}

export class TextMessage extends Message<string> {}

export enum Ack {
  OK = 0,
  FAILURE = 1
}
