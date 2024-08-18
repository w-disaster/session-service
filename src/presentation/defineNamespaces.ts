import { Server } from 'socket.io'
import { registerChatCommands } from './chat/chatCommands'
//import { registerVideoCommands } from "./videoCommands";

export async function registerCommands(io: Server) {
  // Register Chat Commands
  registerChatCommands(io.of('/chat'))

  //  Register Video Commands
  //registerVideoCommands(io.of("/video"));
}
