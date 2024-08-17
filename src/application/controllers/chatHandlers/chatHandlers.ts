import { Socket } from "socket.io";


export interface ChatHandlers {

    /**
     * On Connection Handler
     * @param socket 
     */
    onConnectionHandler(socket: Socket): void


    /**
     * On Join Message Handler
     * @param joinMsg 
     */
    onJoinChatHandler(joinMsg: JoinMsg): void


    /**
     * On Send Message Handler
     * @param message 
     */
    onSendMessageHandler(message: Message): void

}