export default class ChangingHead {
    static async InitializeSequence(element, messages, messageDelay = 300, deleteDelay = 100, wait = 300) {
        element.textContent = "";
        if (element == null) {
            console.log("[ChangingHead]: cant find", element.id);
        }
        else {
            while (true) {
                for (const message of messages) {
                    await this.addMessage(element, message, messageDelay);
                    await this.successAfterMiliseconds(wait);
                    await this.deleteCharsInvert(element, deleteDelay);;

                }
            }
        }
    }

    static async deleteCharsInvert(element, delay) {
        const length = element.textContent.length;

        for (let i = 0; i < length; i++) {
            element.textContent = element.textContent.slice(0, -1);

            await this.successAfterMiliseconds(delay);
        }

        console.log("deleteCharsInvert: finished")
    }

    static async addMessage(element, message, delay) {
        const length = message.length;

        for (let i = 0; i < length; i++) {
            element.textContent += message[i];

            await this.successAfterMiliseconds(delay);
        }

        console.log("addMessage: finished");
    }

    static successAfterMiliseconds(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}