const mainpageContentHead = document.getElementById("orman-haftasi");
const firstMessage = "Orman Haftası";
const secondMessage = "Ormanlar Evimiz";
const thirdMessage = "Nefesimizin Kaynağı";
let messageOrder = 1;

async function main(messageDelay = 300, deleteDelay = 100) {
    while (!window.closed) {
        if (mainpageContentHead) {
            mainpageContentHead.textContent = "";

            await addMessage(mainpageContentHead, firstMessage, messageDelay);
            await deleteCharsInvert(mainpageContentHead, deleteDelay);
            await addMessage(mainpageContentHead, secondMessage, messageDelay);
            await deleteCharsInvert(mainpageContentHead, deleteDelay);
            await addMessage(mainpageContentHead, thirdMessage, messageDelay);
            await deleteCharsInvert(mainpageContentHead, deleteDelay);
        }

        else {
            console.log("[changingHead]main() : can't find 'mainpageContentHead' element");
        }
    }
}

async function deleteCharsInvert(element, delay) {
    const length = element.textContent.length;

    for (let i = 0; i < length; i++) {
        element.textContent = element.textContent.slice(0, -1);

        await successAfterMiliseconds(delay);
    }

    console.log("deleteCharsInvert: finished")
}

async function addMessage(element, message, delay) {
    const length = message.length;

    for (let i = 0; i < length; i++) {
        element.textContent += message[i];

        await successAfterMiliseconds(delay);
    }

    console.log("addMessage: finished");
}

function successAfterMiliseconds(ms) {
    return new Promise(
        (resolve) => {
            setTimeout(
                function () {
                    resolve("resolved");
                },
                ms
            )
        });
}

main();