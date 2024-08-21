import { Namespace, Socket } from 'socket.io'
import {
  ChatController,
  ChatControllerImpl
} from '../../application/controllers/chatControllers/chatController'
import { commandListener, mapRoomToSession, mapWsClientToUser } from '../utils'
import { Room, RoomId, RoomRepository } from './model/room'
import { WsClient, WsClientId, WsClientRepository } from './model/client'
import { User } from './model/dto/user'
import { ClientReactions, ClientReactionsImpl } from './clientReactions'

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

  const chatClientRepository = new WsClientRepository([])
  const roomRepository = new RoomRepository([])

  commandListener(
    chatNamespace,
    'connection',
    () => true,
    (socket: Socket) => {
      // userToken listener
      chatCommandListener(socket, 'userToken', (message: any) => {
        const { token } = message
        /*
            Create the Client and add it to the user repository of the chat namespace.
            If it already joined a room chat, don't connect it to new ones.
        */
        const chatClient = new WsClient(new WsClientId(socket, token), 'myemail@studio.unibo.it')

        if (chatClientRepository.add(chatClient)) {
          // joinRoom listener
          chatCommandListener(socket, 'joinRoom', (message: any) => {
            const { room } = message

            // Join the Client to an existing or new Room
            const roomId = new RoomId('chat', room)
            const clientRoom: Room | undefined = roomRepository.contains(roomId)
              ? roomRepository.find(roomId)
              : new Room(roomId, new WsClientRepository([chatClient]))

            if (clientRoom) {
              clientRoom.value.add(chatClient)
              roomRepository.add(clientRoom)

              const clientReactions: ClientReactions = new ClientReactionsImpl(
                chatNamespace,
                chatClient,
                clientRoom
              )
              const chatController: ChatController = new ChatControllerImpl(
                clientReactions,
                mapRoomToSession(clientRoom)
              )

              const user: User = mapWsClientToUser(chatClient)
              chatController.joinRoom(user).then(() => {
                // Register Leave Room listener
                chatCommandListener(socket, 'leaveRoom', (message: any) => {
                  chatController.leaveRoom(user)
                })

                // Register Send Message listener
                chatCommandListener(socket, 'sendMessage', (data: any) => {
                  const { message } = data
                  chatController.sendMessage(message)
                })
              })
            }
          })

          // Client disconnects
          chatCommandListener(socket, 'disconnect', (message: any) => {
            chatClientRepository.remove(chatClient.id)
          })
        } else {
          // Disconnect the user from the server side
          socket.disconnect()
        }
      })
    }
  )
}
