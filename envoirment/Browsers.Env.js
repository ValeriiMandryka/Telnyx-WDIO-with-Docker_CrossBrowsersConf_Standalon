
const Chrome = 
    
   [{

    maxInstances: 1,
    browserName: 'chrome',
   'goog:chromeOptions': {args: [ '--headless', '--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']},
    acceptInsecureCerts: true,
   
    }]
const Firefox = [{
    maxInstances: 1,
    browserName: 'firefox',
    'moz:firefoxOptions': {args:[ '--headless', '--start-maximized', '--no-sandbox', '--disable -gpu', '--window-size=1920,780', '--allow-insecure-localhost']},
    acceptInsecureCerts: true
    }]
   
let Envoirment = String;


if (process.env.BROWSER =='CHROME') {Envoirment= Chrome } else
if (process.env.BROWSER =='Firefox') {Envoirment= Firefox }

module.exports = Envoirment
