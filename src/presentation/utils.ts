import { Namespace, Socket } from 'socket.io'
import { Room } from './chat/model/room'
import { Session, SessionId } from './chat/model/dto/session'
import { User, UserRepository, UserId } from './chat/model/dto/user'
import { WsClient } from './chat/model/client'

/**
 * Command listener util function
 * @param sn
 * @param command
 * @param verifyCommand
 * @param commandCallback
 */
export function commandListener<X>(
  sn: Socket | Namespace,
  command: string,
  verifyCommand: (argv: X) => boolean,
  commandCallback: (argv: X) => void
) {
  sn.on(command, (argv: X) => {
    if (verifyCommand(argv)) {
      commandCallback(argv)
    }
  })
}

/**
 * Maps a Room to a Session
 * @param room
 * @returns
 */
export function mapRoomToSession(room: Room): Session {
  return new Session(
    new SessionId(room.id.roomName),
    new UserRepository(room.value.values.map((wsClient: WsClient) => mapWsClientToUser(wsClient)))
  )
}

/**
 * Maps a Websocket Client to a User
 * @param wsClient
 * @returns
 */
export function mapWsClientToUser(wsClient: WsClient): User {
  return new User(new UserId(wsClient.id.socket.id), 'myName', 'mySurname')
}
