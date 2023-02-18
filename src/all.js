const si = require('systeminformation');

const getAllStatcData = async () => {
    return si.getStaticData()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getAllStatcData
}