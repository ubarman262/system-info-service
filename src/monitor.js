const { monitorBatteryCharging } = require("./battery");
const { monitorSiteStatus } = require("./checkSite");

function monitor() {
    try {
        setInterval(async () => {
            await monitorBatteryCharging();
            await monitorSiteStatus('https://jellyfin.ujjwalbarman.in');
        }, 60000);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = monitor;