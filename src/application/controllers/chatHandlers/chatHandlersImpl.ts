import { Socket } from "socket.io";
import { ChatHandlers } from "./chatHandlers";


class ChatHandlersImpl implements ChatHandlers {
    
    private verifyChatMessage(message: Message): boolean {
        return true;
    }

    onConnectionHandler(socket: Socket): void {
        throw new Error("Method not implemented.");
    }

    onJoinChatHandler(joinMsg: JoinMsg): void {
        this.verifyChatMessage(joinMsg);

        throw new Error("Method not implemented.");
    }

    onSendMessageHandler(message: ): void {
        this.verifyChatMessage(message)

        throw new Error("Method not implemented.");
    }

}