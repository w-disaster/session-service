import {
  JoinNotification,
  NotificationMessage,
  TextMessage
} from '../../../src/domain/aggregates/chat/message'
import { IChatReactions } from '../../../src/domain/reactions/chatReactions'
import { IVideoReactions } from '../../../src/domain/reactions/videoReactions'
import { User, UserId } from '../../../src/domain/user'
import { IChat, Chat } from '../../../src/domain/aggregates/chat/chat'
import { EventBus, IEventBus } from '../../../src/domain/event/eventBus'
import {
  UserJoinedSessionEvent,
  UserLeftSessionEvent
} from '../../../src/domain/aggregates/session/events/sessionEvents'
import { EmptySessionReactions } from '../emptyReactions/emptySessionReactions'
import { expect } from 'chai'
import { EmptyVideoReactions } from '../emptyReactions/emptyVideoReactions'
import { EmptyChatReactions } from '../emptyReactions/emptyChatReactions'
import { MessageSentEvent } from '../../../src/domain/aggregates/chat/events/chatEvents'

describe('chat aggregate', () => {
  const user: User = new User(new UserId('user@email.com'), 'username')
  const emptyVideoReactions: IVideoReactions = new EmptyVideoReactions()
  const eventBus: IEventBus = new EventBus()
  const chat: IChat = new Chat(eventBus)

  before(() => {
    chat.registerEventHandlers()
  })

  it('should emit a chat notification to the session when a user joins', (done) => {
    const chatReactions: IChatReactions = {
      sendNotificationToSession: function (notificationMessage: NotificationMessage): void {
        expect(notificationMessage.getSender).to.be.equal(user)
        expect(notificationMessage.getContent).to.be.equal(JoinNotification.JOIN_SESSION)
        done()
      },
      emitTextMessagesToClient: function (..._textMessages: TextMessage[]): void {
        throw new Error('Method should not be used for testing.')
      },
      sendTextMessagesToSession: function (..._textMessages: TextMessage[]): void {
        throw new Error('Method should not be used for testing.')
      }
    }

    eventBus.publish(
      new UserJoinedSessionEvent(
        user,
        new EmptySessionReactions(chatReactions, emptyVideoReactions)
      )
    )
  })

  it('should emit a chat notification to the session when a user leaves', (done) => {
    const chatReactions: IChatReactions = {
      sendNotificationToSession: function (notificationMessage: NotificationMessage): void {
        expect(notificationMessage.getSender).to.be.equal(user)
        expect(notificationMessage.getContent).to.be.equal(JoinNotification.LEAVE_SESSION)
        done()
      },
      emitTextMessagesToClient: function (..._textMessages: TextMessage[]): void {
        throw new Error('Method should not be used for testing.')
      },
      sendTextMessagesToSession: function (..._textMessages: TextMessage[]): void {
        throw new Error('Method should not be used for testing.')
      }
    }

    eventBus.publish(
      new UserLeftSessionEvent(user, new EmptySessionReactions(chatReactions, emptyVideoReactions))
    )
  })

  it('should emit all messages sent so far when user joins a session', (done) => {
    const alternativeUser: User = new User(
      new UserId('alternativeUser@email.com'),
      'alernativeUsername'
    )
    const textMessage = new TextMessage(alternativeUser, 'Hello World!')

    const chatReactions: IChatReactions = {
      sendNotificationToSession: function (_notificationMessage: NotificationMessage): void {
        return
      },
      emitTextMessagesToClient: function (...textMessages: TextMessage[]): void {
        expect(textMessages).to.have.lengthOf(1)
        expect(textMessages[0]).to.be.equal(textMessage)
        done()
      },
      sendTextMessagesToSession: function (..._textMessages: TextMessage[]): void {
        throw new Error('Method should not be used for testing.')
      }
    }

    eventBus.publish(
      new MessageSentEvent(
        textMessage,
        new EmptySessionReactions(new EmptyChatReactions(), emptyVideoReactions)
      )
    )
    eventBus.publish(
      new UserJoinedSessionEvent(
        user,
        new EmptySessionReactions(chatReactions, emptyVideoReactions)
      )
    )
  })

  it('should emit a message to the session', (done) => {
    const textMessage = new TextMessage(user, 'Hello World!')

    const chatReactions: IChatReactions = {
      sendNotificationToSession: function (_notificationMessage: NotificationMessage): void {
        throw new Error('Method should not be used for testing.')
      },
      emitTextMessagesToClient: function (..._textMessages: TextMessage[]): void {
        throw new Error('Method should not be used for testing.')
      },
      sendTextMessagesToSession: function (...textMessages: TextMessage[]): void {
        expect(textMessages).to.have.lengthOf(1)
        expect(textMessages[0]).to.be.equal(textMessage)
        done()
      }
    }

    eventBus.publish(
      new MessageSentEvent(
        textMessage,
        new EmptySessionReactions(chatReactions, emptyVideoReactions)
      )
    )
  })
})