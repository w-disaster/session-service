import { Socket } from 'socket.io'

export function disconnectionCommand(socket: Socket): (message: any) => void {
  return (message) => socket.disconnect()
}
