import { TextMessage } from '../../message'
import { AbstractDeserializer } from './deserializer'
import { UserDeserializer } from './userDeserializer'

export class TextMessageDeserializer extends AbstractDeserializer<TextMessage> {
  isJsonValid(json: any): boolean {
    return typeof json.sender === 'object' && typeof json.content === 'string'
  }

  deserializeJson(json: any): TextMessage {
    return new TextMessage(new UserDeserializer().deserialize(json.sender), json.content)
  }
}
