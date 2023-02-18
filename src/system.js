const si = require('systeminformation');
const { makeTable } = require('./tableMaker');

const getSystemDetails = async () => {
    // return makeTable(await si.system());
    return si.system()
        .then(data => data)
        .catch(error => console.error(error));
}

module.exports = {
    getSystemDetails
}