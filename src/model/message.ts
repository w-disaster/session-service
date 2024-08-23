export enum Notification {
  JOINROOM,
  LEAVEROOM
}

export class Message {
  private readonly name: string
  private readonly surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get senderName(): string {
    return this.name
  }

  get senderSurname(): string {
    return this.surname
  }
}

export class NotificationMessage extends Message {
  private readonly notification: Notification

  constructor(name: string, surname: string, notification: Notification) {
    super(name, surname)
    this.notification = notification
  }

  get notificationType(): Notification {
    return this.notification
  }
}

export class TextMessage extends Message {
  private readonly text: string

  constructor(name: string, surname: string, text: string) {
    super(name, surname)
    this.text = text
  }

  get getText(): string {
    return this.text
  }
}
