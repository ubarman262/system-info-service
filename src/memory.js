const si = require('systeminformation');

const getMemoryDetails = async () => {
    return si.mem()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getMemoryDetails
}