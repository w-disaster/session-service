abstract class CommandCallback<X extends Message> {

    /**
     * Verifies the message to be appropriate, to be implemented by subclasses.
     * @param message 
     */
    protected abstract verifyMessage(message: X): boolean;

    /**
     * Callback to run after receiving a command, to be implemented by subclasses.
     * @param message 
     */
    protected abstract callbackBody(message: X): void;

    /**
     * Callback
     * @param message 
     */
    callback(message: X) {
        if (this.verifyMessage(message)) {
            this.callbackBody(message)
        }
    }

}