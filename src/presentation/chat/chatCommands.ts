import { Namespace, Socket } from 'socket.io'
import {
  ChatController,
  ChatControllerImpl
} from '../../application/controllers/chatControllers/chatController'
import { ChatReactions, ChatReactionsImpl } from './chatReactions'
import { commandListener } from '../utils'
import {
  Room,
  RoomRepository,
  User,
  UserRepository
} from '../../application/controllers/userController'

/**
 * Register Chat Commands to the given Namespace
 * @param chatNamespace
 */
export function registerChatCommands(chatNamespace: Namespace) {
  /**
   * Chat Command Listener with default message check.
   * @param socket
   * @param command
   * @param commandCallback
   */
  function chatCommandListener(
    socket: Socket,
    command: string,
    commandCallback: (argv: string) => void
  ) {
    // TODO: implement check
    commandListener(socket, command, () => true, commandCallback)
  }

  const chatUserRepository = new UserRepository([])
  const roomRepository = new RoomRepository([])

  commandListener(
    chatNamespace,
    'connection',
    () => true,
    (socket: Socket) => {
      chatCommandListener(socket, 'userToken', (message: any) => {
        const { token } = message
        console.log('token received!')
        // Add the user to the user repository of the chat namespace
        const chatUser = new User('temporaryEmail@gmail.com', token, socket)
        // If it already joined a room chat, don't connect it to new ones
        if (chatUserRepository.addUser(chatUser)) {
          // Register Join Room listener
          chatCommandListener(socket, 'joinRoom', (message: any) => {
            const { roomName } = message

            // Join the user to the room if existing, Create a new one otherwise.
            const room: Room | undefined = roomRepository.containsRoomWithId('chat', roomName)
              ? roomRepository.getRoomFromId('chat', roomName)
              : new Room(roomName, 'chat', new UserRepository([]))

            if (room) {
              room.userRepository.addUser(chatUser)
              roomRepository.addRoom(room)

              const chatReactions: ChatReactions = new ChatReactionsImpl(
                chatNamespace,
                socket,
                room
              )
              const chatController: ChatController = new ChatControllerImpl(chatReactions, room)

              chatController.joinRoom(chatUser).then(() => {
                // Register Leave Room listener
                chatCommandListener(socket, 'leaveRoom', (message: string) =>
                  chatController.leaveRoom(message)
                )
                // Register Send Message listener
                chatCommandListener(socket, 'sendMessage', (data: any) => {
                  const { message } = data
                  chatController.sendMessage(message)
                })
              })
            }
          })

          // User disconnects
          chatCommandListener(socket, 'disconnect', (message: any) => {
            chatUserRepository.removeUser(chatUser)
          })
        } else {
          // Disconnect the user from the server side
          socket.disconnect()
        }
      })
    }
  )
}
