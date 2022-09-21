const {config} = require("../wdio.conf");
const path = require("path");

const chromeConfig = {
...config,
services: [
    ['selenium-standalone', { drivers: { firefox: '0.29.1', chrome: true, chromiumedge: 'latest' } }]
],
capabilities: [{
maxInstances: 1,
browserName: "chrome",
'goog:chromeOptions': {

args: [ '--start-maximized', '--no-sandbox', '--disable -gpu',  '--allow-insecure-localhost']

},
}],
logLevel: 'warn',


path: "/wd/hub",

};

exports.config = chromeConfig;