const si = require('systeminformation');
const sendMsgWithImgToBot = require('./bot/telegram');
let messageSentPo = false;
let messageSentNe = false;
let criticalMessage = false;

const getBatteryDetails = async () => {
    return si.battery()
        .then(data => data)
        .catch(error => console.error(error));
}

const monitorBatteryCharging = async () => {
    const battery = await getBatteryDetails();
    try {
        if (battery.hasBattery) {
            if (!battery.acConnected && !messageSentNe) {
                await sendMsgWithImgToBot("Power Lost!", "power_lost.gif");
                messageSentNe = true;
                messageSentPo = false;
                criticalMessage = false;
            } else if (battery.acConnected && !messageSentPo) {
                await sendMsgWithImgToBot("Connected to AC!", "power_back.gif");
                messageSentPo = true;
                messageSentNe = false;
                criticalMessage = false;
            } else if (!battery.acConnected && battery.percent < 95 && !criticalMessage) {
                sendMsgWithImgToBot("Battery level critical!", "power_critical.gif");
                criticalMessage = true;
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getBatteryDetails,
    monitorBatteryCharging
}