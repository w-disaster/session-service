import { Namespace, Socket } from 'socket.io'
import { Room } from './model/room'

export interface RoomReactions {
  socket: Socket
  io: Namespace
  room: Room

  /**
   * Joins the SocketIO socket to the room specified in the constructor.
   */
  joinRoom(): void

  /**
   * Sends a message to the SocketIO room, joined or not.
   * @param msg
   */
  emitMessageToRoom(msg: EmitMessage): void

  /**
   * Disconnects the SocketIO socket from the room.
   */
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

export class RoomReactionsImpl implements RoomReactions {
  socket: Socket
  io: Namespace
  room: Room

  constructor(io: Namespace, socket: Socket, room: Room) {
    this.socket = socket
    this.io = io
    this.room = room
  }

  joinRoom(): void {
    this.socket.join(this.room.id.roomName)
  }

  emitMessageToRoom(emitMsg: EmitMessage): void {
    this.io.to(this.room.id.roomName).emit('message', emitMsg.message)
  }

  leaveRoom(): void {
    console.log('user disconnected:', this.socket.id)
  }
}
