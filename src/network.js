const si = require('systeminformation');

const getNetworkDetails = async () => {
    return si.networkInterfaces()
        .then(data => data)
        .catch(error => console.error(error));
}

const getNetworkConectionDetails = async () => {
    return si.networkConnections()
        .then(data => data)
        .catch(error => console.error(error));
}

const getConnectedNetworkDetails = async () => {
    return si.networkStats()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getNetworkDetails,
    getNetworkConectionDetails,
    getConnectedNetworkDetails
}
