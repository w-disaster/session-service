
enum Notification {
    JOINROOM, LEAVEROOM
}

class Message {

    readonly name: string;
    readonly surname: string;

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    get senderName(): string {
        return this.name;
    }

    get senderSurname(): string {
        return this.surname;
    }
}

class NotificationMessage extends Message {

    readonly notification: Notification

    constructor(name: string, surname: string, notification: Notification) {
        super(name, surname);
        this.notification = notification;
    }

    get notificationType(): Notification {
        return this.notification;
    }

}

class TextMessage extends Message {

    text: string;

    constructor(name: string, surname: string, text: string) {
        super(name, surname);
        this.text = text
    }

    get getText(): string {
        return this.text;
    }

}
