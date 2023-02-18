const si = require('systeminformation');

const getWifiNetworks = async () => {
    return si.wifiNetworks()
        .then(data => data)
        .catch(error => console.error(error));
}

const getWifiInterfaces = async () => {
    return si.wifiNetworks()
        .then(data => data)
        .catch(error => console.error(error));
}

const getWifiConnections = async () => {
    return si.wifiNetworks()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getWifiNetworks,
    getWifiInterfaces,
    getWifiConnections
}