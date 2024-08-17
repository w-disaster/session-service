import { Namespace, Socket } from "socket.io";


export function registerChatHandlers(chatNamespace: Namespace) {

    chatController: ChatController = ChatController(chatNamespace)

    chatNamespace.on("connection", (socket: Socket) => {


        socket.on("JoinRoom", (joinMsg: JoinMsg) => {
            
        });

        socket.on("SendMessage", () => {
            
        });


    });

}
