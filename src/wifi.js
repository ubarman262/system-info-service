const si = require('systeminformation');

const getAvailableConnections = async () => {
    const available = await si.wifiNetworks()
        .then(data => data)
        .catch(error => console.error(error));
    return available.sort((a, b) => b.signalLevel - a.signalLevel);
}

const getWifiInterfaces = async () => {
    return si.wifiInterfaces()
        .then(data => data)
        .catch(error => console.error(error));
}

const getWifiAciveConnections = async () => {
    return si.wifiConnections()
        .then(data => data)
        .catch(error => console.error(error));
}

const getAllWifiInfo = async () => {
    const active = await getWifiAciveConnections();
    const available = await getAvailableConnections();
    const interface = await getWifiInterfaces();
    const info = [];
    info.push({ active: [...active] });
    info.push({ available: [...available] });
    info.push({ interface: [...interface] });
    return info;
}

module.exports = {
    getAvailableConnections,
    getWifiInterfaces,
    getWifiAciveConnections,
    getAllWifiInfo
}