import { Server } from 'socket.io'
import { ChatNamespace, SessionNamespace } from './chat/chatNamespace'

export async function registerCommands(io: Server) {
  // Register Chat Commands
  const chatNamespace: SessionNamespace = new ChatNamespace()
  chatNamespace.registerCommands(io.of('/chat'))

  //  Register Video Commands
  //registerVideoCommands(io.of("/video"));
}
