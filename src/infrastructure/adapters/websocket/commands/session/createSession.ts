import { Socket } from 'socket.io'
import { ISessionService } from '../../../../../application/sessionService'
import { CreateSessionCommand } from '../../../../../domain/aggregates/session/commands/sessionCommands'
import { CreateSessionResponse } from '../../../../../domain/common/command/response'
import { User } from '../../../../../domain/common/user'
import { CommandType } from '../../../../../domain/common/command/command'

/**
 * Accepts Create Session Commands
 * @param socket Socket IO socket
 * @param user User
 * @param sessionService Session Servuce
 */
export function acceptCreateSessionCommand(
  socket: Socket,
  user: User,
  sessionService: ISessionService
) {
  socket.on(CommandType.CREATE_SESSION, (message, ack) => {
    const { videoUrl } = message
    sessionService
      .handleCreateSessionCommand(new CreateSessionCommand(user, videoUrl))
      .then((createSessionResponse: CreateSessionResponse) => ack(createSessionResponse))
  })
}
