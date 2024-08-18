import { Namespace, Socket } from 'socket.io'

export interface ChatReactions {
  joinRoom(room: Room): void

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
  room: Room
  message: string

  constructor(room: Room, message: string) {
    this.room = room
    this.message = message
  }
}

export class ChatReactionsImpl implements ChatReactions {
  socket: Socket
  io: Namespace

  constructor(io: Namespace, socket: Socket) {
    this.socket = socket
    this.io = io
  }

  joinRoom(room: Room): void {
    this.socket.join(room.id)
    console.log('User joined room')
  }

  emitMessageToRoom(emitMsg: EmitMessage): void {
    console.log('emitting msg to', emitMsg.message, emitMsg.room.id)
    this.io.to(emitMsg.room.id).emit('message', emitMsg.message)
  }

  leaveRoom(): void {
    console.log('user disconnected:', this.socket.id)
  }
}
