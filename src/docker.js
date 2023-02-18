const si = require('systeminformation');

const getDockerDetails = async () => {
    return si.dockerAll()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getDockerDetails
}