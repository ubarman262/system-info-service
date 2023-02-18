const si = require('systeminformation');
const sendMsgWithImgToBot = require('./bot/telegram');

let messageSentNe = false;

const getSiteStatus = async (url) => {
    return si.inetChecksite(url)
        .then(data => data)
        .catch(error => console.error(error));
}

const monitorSiteStatus = async (url) => {
    try {
        const status = await getSiteStatus(url);
        if (!status.ok && status.status > 399 && !messageSentNe) {
            await sendMsgWithImgToBot(`Services are down!\r\n\r\nRestart the services - \r\n\r\nhttps://tinyurl.com/4v56sxra`, "server_down.gif");
            setTimeout(() => {
                restartService('https://tinyurl.com/4v56sxra');
            }, 15000);
            messageSentNe = true;
        } else if (status.ok) {
            messageSentNe = false;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const restartService = (url) => {
    const request = require('request');
    request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log('Service restarted successfully');
        }
    })
}

module.exports = {
    getSiteStatus,
    monitorSiteStatus
}