const si = require('systeminformation');

const getGraphicsDetails = async () => {
    return si.graphics()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getGraphicsDetails
}