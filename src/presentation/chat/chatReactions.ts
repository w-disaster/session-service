import { Namespace, Socket } from 'socket.io'

export interface ChatReactions {
  joinRoom(): void

  emitMessageToRoom(remitMsg: EmitMessage): void

  leaveRoom(): void
}

/**
 * Entity Room
 */
export class Room {
  id: string
  constructor(id: string) {
    this.id = id
  }
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
    this.socket.join(this.room.id)
  }

  emitMessageToRoom(emitMsg: EmitMessage): void {
    this.io.to(this.room.id).emit('message', emitMsg.message)
  }

  leaveRoom(): void {
    console.log('user disconnected:', this.socket.id)
  }
}
