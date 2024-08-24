import { Namespace, Socket } from 'socket.io'
import { Ack, Message, MessageContent } from '../../model/message'

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
  commandCallback: (argv: X, ack: any) => void
): void {
  sn.on(command, (argv: X, ack) => {
    if (verifyCommand(argv)) {
      commandCallback(argv, ack)
    }
  })
}

/**
 * Chat Command Listener with default message check.
 * @param socket
 * @param command
 * @param commandCallback
 */
export function chatCommandListener(
  socket: Socket,
  command: string,
  commandCallback: (argv: any, ack: any) => void
) {
  // TODO: implement check
  commandListener(socket, command, () => true, commandCallback)
}

export function chatReaction<X extends void | Message<MessageContent>>(
  promise: Promise<X>,
  successReaction: (x: X) => void,
  ack?: any
) {
  promise
    .then((message: X) => {
      successReaction(message)
      ack(Ack.OK)
    })
    .catch(() => Ack.FAILURE)
}
