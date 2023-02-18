const si = require('systeminformation');

const getCPUDetails = async () => {
    return si.cpu()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getCPUDetails
}