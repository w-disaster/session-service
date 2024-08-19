import { Socket } from 'socket.io'

/**
 * Entity modeling the User in the presentation layer.
 */
export class User {
  socket: Socket // id
  token: string // id
  email: string

  constructor(email: string, token: string, socket: Socket) {
    this.email = email
    this.token = token
    this.socket = socket
  }
}

export class UserRepository {
  private users: Array<User>

  constructor(users: Array<User>) {
    this.users = users
  }

  private containsUser(user: User): boolean {
    return this.users.some((u) => u.socket == user.socket && u.token == user.token)
  }

  addUser(user: User): boolean {
    if (!this.containsUser(user)) {
      this.users.push(user)
      return true
    }
    return false
  }

  removeUser(user: User): boolean {
    if (this.containsUser(user)) {
      this.users = this.users.filter((u) => u.socket !== user.socket)
      return true
    }
    return false
  }
}

export class Room {
  roomName: string
  namespaceName: string
  userRepository: UserRepository

  constructor(roomName: string, namespaceName: string, userRepository: UserRepository) {
    this.roomName = roomName
    this.namespaceName = namespaceName
    this.userRepository = userRepository
  }
}

export class RoomRepository {
  private rooms: Array<Room>

  constructor(rooms: Array<Room>) {
    this.rooms = rooms
  }

  containsRoomWithId(roomName: string, namespaceName: string): boolean {
    return this.rooms.some((r) => r.namespaceName == namespaceName && r.roomName == roomName)
  }

  addRoom(room: Room): boolean {
    if (!this.containsRoomWithId(room.roomName, room.namespaceName)) {
      this.rooms.push(room)
      return true
    }
    return false
  }

  removeRoom(room: Room): boolean {
    if (this.containsRoomWithId(room.roomName, room.namespaceName)) {
      this.rooms = this.rooms.filter(
        (r) => !(r.namespaceName == room.namespaceName && r.roomName == room.roomName)
      )
      return true
    }
    return false
  }

  getRoomFromId(namespaceName: string, roomName: string): Room | undefined {
    return this.rooms.find(
      (room) => room.roomName == roomName && room.namespaceName == namespaceName
    )
  }
}

// class RoomController {

//     namespaceRoomRepo: NamespaceRoomRepository;

//     constructor(namespaceRoomRepo: NamespaceRoomRepository) {
//         this.namespaceRoomRepo = namespaceRoomRepo;
//     }

//     // joinUserToRoom(user: NamespaceUser, roomName: string) {

//     //     if (this.namespaceRoomRepo.namespaceRooms.some(room => room.roomName == roomName)) {
//     //         // room with roomName already exists
//     //         if (this.namespaceRoomRepo.namespaceRooms.some(room =>
//     //             room.namespaceUsers.some(u => u == user))) {
//     //             // user already joined the room
//     //             return false;
//     //         } else {
//     //             this.namespaceRoomRepo.addRoom()
//     //         }
//     //     }

//     // }

// }
