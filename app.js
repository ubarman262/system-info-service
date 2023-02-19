const express = require('express');
const { getBatteryDetails } = require('./src/battery');
const { getGraphicsDetails } = require('./src/graphics');
const { getMemoryDetails } = require('./src/memory');
const { getOSDetails } = require('./src/os');
const { getSystemDetails } = require('./src/system');
const { getCPUDetails } = require('./src/cpu');
const { getUsersDetails } = require('./src/users');
const { getDiskSpace, getDiskLayout, getDiskDetails } = require('./src/disk');
const { getNetworkDetails, getNetworkConectionDetails, getConnectedNetworkDetails } = require('./src/network');
const { getSiteStatus } = require('./src/checkSite');
const { getAllData } = require('systeminformation');
const { getDockerDetails } = require('./src/docker');
const monitor = require('./src/monitor');
const { getAvailableConnections, getAllWifiInfo, getWifiInterfaces, getWifiAciveConnections } = require('./src/wifi');

const app = express();
const port = 2916;

monitor();

app.use(cors());

//Most add routes
app.get('/', async (req, res) => {
    res.send(await getAllData())
});

app.get('/battery', async (req, res) => {
    res.send(await getBatteryDetails());
});

app.get('/checksite', async (req, res) => {
    res.send(await getSiteStatus(req.query.site));
});

app.get('/connection', async (req, res) => {
    res.send(await getNetworkConectionDetails());
});

app.get('/cpu', async (req, res) => {
    res.send(await getCPUDetails());
});

app.get('/disk', async (req, res) => {
    res.send(await getDiskDetails());
});

app.get('/disk/layout', async (req, res) => {
    res.send(await getDiskLayout());
});
app.get('/disk/layout', async (req, res) => {
    res.send(await getDiskLayout());
});

app.get('/disk/space', async (req, res) => {
    res.send(await getDiskSpace());
});

app.get('/docker', async (req, res) => {
    res.send(await getDockerDetails());
});

app.get('/graphics', async (req, res) => {
    res.send(await getGraphicsDetails());
});

app.get('/memory', async (req, res) => {
    res.send(await getMemoryDetails());
});

app.get('/network', async (req, res) => {
    res.send(await getNetworkDetails());
});

app.get('/network/connected', async (req, res) => {
    res.send(await getConnectedNetworkDetails());
});

app.get('/os', async (req, res) => {
    res.send(await getOSDetails());
});

app.get('/system', async (req, res) => {
    res.send(await getSystemDetails());
});

app.get('/users', async (req, res) => {
    res.send(await getUsersDetails());
});

app.get('/wifi', async (req, res) => {
    res.send(await getAllWifiInfo());
});

app.get('/wifi/active', async (req, res) => {
    res.send(await getWifiAciveConnections());
});

app.get('/wifi/available', async (req, res) => {
    res.send(await getAvailableConnections());
});

app.get('/wifi/interface', async (req, res) => {
    res.send(await getWifiInterfaces());
});


app.listen(port, () => {
    console.log(`System Info app listening on port ${port}`)
})