const si = require('systeminformation');

const getOSDetails = async () => {
    return si.osInfo()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getOSDetails
}