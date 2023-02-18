const TG = require('telegram-bot-api')
const fs = require('fs');

const api = new TG({
    token: '1741956325:AAEnH_KqPhqKeRJ40Ly4UqdE-U8HscPPEnM'
});

async function sendMsgWithImgToBot(msg, imageName) {
    await api.sendAnimation({
        chat_id: '605120676',
        caption: msg,
        animation: fs.createReadStream(`./src/assets/${imageName}`),
    }).catch(error => {
        console.log(error.message);
    });
}

module.exports = sendMsgWithImgToBot;





