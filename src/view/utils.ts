import { Namespace, Socket } from 'socket.io'

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
