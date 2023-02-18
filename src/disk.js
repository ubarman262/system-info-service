const si = require('systeminformation');

const getBlockDevices = async () => {
    return si.blockDevices()
        .then(data => data)
        .catch(error => console.error(error));
}

const getDiskSpace = async () => {
    return si.fsSize()
        .then(data => data)
        .catch(error => console.error(error));
}

const getDiskDetails = async () => {
    const block = await getBlockDevices();
    const space = await getDiskSpace();
    const disk = [];
    block.map(data => {
        space.map(spaceInfo => {
            if (data.identifier === spaceInfo.fs) {
                disk.push({ ...data, ...spaceInfo });
            }
        });
    });
    return disk;
}

module.exports = {
    getBlockDevices,
    getDiskSpace,
    getDiskDetails
}