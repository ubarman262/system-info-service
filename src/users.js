const si = require('systeminformation');

const getUsersDetails = async () => {
    return si.users()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getUsersDetails
}