

export interface ChatController {

    joinRoom(roomId: string): Promise<void>;

    sendMessage(roomId: string, message: string): Promise<void>;

    leaveRoom(message: string): Promise<void>;

}