import { Server } from "socket.io";
import { registerChatCommands } from "./chatCommands";
//import { registerVideoCommands } from "./videoCommands";


export async function defineNamespaces(io: Server) {

    // Register Chat Commands
    registerChatCommands(io.of("/chat"));

    // // Register Video Commands
    // TODO
    // registerVideoCommands(io.of("/video"));


}