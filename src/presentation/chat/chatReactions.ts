import { Namespace, Socket } from 'socket.io'
import { Room } from '../../application/controllers/userController'

export interface ChatReactions {
  joinRoom(): void

  emitMessageToRoom(remitMsg: EmitMessage): void

  leaveRoom(): void
}

/**
 * Value Object Emit Message
 */
export class EmitMessage {
  message: string

  constructor(message: string) {
    this.message = message
  }
}

export class ChatReactionsImpl implements ChatReactions {
  socket: Socket
  io: Namespace
  room: Room

  constructor(io: Namespace, socket: Socket, room: Room) {
    this.socket = socket
    this.io = io
    this.room = room
  }

  joinRoom(): void {
    this.socket.join(this.room.roomName)
  }

  emitMessageToRoom(emitMsg: EmitMessage): void {
    this.io.to(this.room.roomName).emit('message', emitMsg.message)
  }

  leaveRoom(): void {
    console.log('user disconnected:', this.socket.id)
  }
}
