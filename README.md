
   
# WDIO_Docker_crossBrowsersTest_AllureReport  [Telnyx](https://telnyx.com/)

## 1. Envoirment for succesfull test runung:
   1.1. [Node.js](https://nodejs.org/uk/)
   1.2. [VSC](https://code.visualstudio.com/download)
   
## 2. Envoirment to run in Docker:
   2.1. [Docker](https://docs.docker.com/desktop/install/windows-install/)
    

## 3.To lounch tests open VSC and in terminal run:

```
git clone https://github.com/ValeriiMandryka/WDIO_Docker_CrossBrowsersConf_Standalon_Telnyx.git

```
## 3. Install depandencies:
```
npm install

```
## 3. Install Allure reorter:
```
npm install @wdio/allure-reporter --save-dev

```
```
npm i allure-commandline

```

## 4. To execute tests run:

   4.1 Headless mode on browsers: Chrome, Firefox whith Allure report
```
npm run crossbrowser:test:headless:allure
```
  4.2 Head mode only in Chrome:
```
npm run chrome:ui
```
  4.3 Head mode only in Firefox:
```
npm run firefox:ui
```
## 5. To execute report after test:
```
npm run allure:report
```
```
allure-serve
```
## 5. To run test in Docker:

   1. Lounch Docker
   2. Open project in VSC
   3. Split terminal
   3. In first terminal to run Containers for tests run:
```
npm run docker:composeruner:exit
```
   4. In second terminal to run  tests run:
```
npm run docker:crossbrowser
```
   5. To stop containers run:
```
Docker compose down
```
