const {config} = require("../wdio.conf");
const path = require("path");

const chromeConfig = {
...config,

services: [
    ['selenium-standalone', {
        logPath: './temp',
        args: {
            version: "3.141.59",
            seleniumArgs: ['-host', '127.0.0.1','-port', '5555']
        },
    }]
],
capabilities: [{
    browserName: 'chrome',
    port: 5555
}],
// services: [
//     ['selenium-standalone']
// ],

// capabilities: [{
// maxInstances: 1,
// browserName: "chrome",
// 'goog:chromeOptions': {

// args: [ '--start-maximized', '--no-sandbox', '--disable -gpu',  '--allow-insecure-localhost']

// },
// }],
logLevel: 'warn',


path: "/wd/hub",

};

exports.config = chromeConfig;