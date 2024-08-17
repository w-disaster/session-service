
abstract class ChatCommandCallback extends CommandCallback<ChatMessage> {

    verifyMessage(message: ChatMessage): boolean {
        return true;
    }

    protected abstract callbackBody(message: ChatMessage): void;


}
