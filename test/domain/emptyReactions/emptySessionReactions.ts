import { IChatReactions } from '../../../src/domain/common/reactions/chatReactions'
import { ISessionReactions } from '../../../src/domain/common/reactions/sessionReactions'
import { IVideoReactions } from '../../../src/domain/common/reactions/videoReactions'

export class EmptySessionReactions implements ISessionReactions {
  private readonly chatReactions: IChatReactions
  private readonly videoReactions: IVideoReactions

  constructor(chatReactions: IChatReactions, videoReactions: IVideoReactions) {
    this.chatReactions = chatReactions
    this.videoReactions = videoReactions
  }

  joinUserToSession(): void {
    throw new Error('Method should not be used for testing.')
  }
  leaveUserFromSessionAndDisconnect(): void {
    throw new Error('Method should not be used for testing.')
  }

  get getChatReactions(): IChatReactions {
    return this.chatReactions
  }

  get getVideoReactions(): IVideoReactions {
    return this.videoReactions
  }
}
