# node-sandbox
sandbox repo to try different features of `node.js / mocha / chai & webdriver.io with allure reports`

## Services:
- How to start service  -  `npm start` starts up service @ `http://localhost:3000`
- `GET` operations:
    - service path `/hello`    -   returns `Hello World!` text
    - service path `/people`   -   returns `list of people with attributes like name, age, hairColor`
    - service path `/file-data`-   returns same response as `/people` (internally the data is fetched from .json file)
    - service path `/people/${name}` - returns `specific person object with attributes` e.g. `/people/John`
- `POST` operation:
    - service path `/people` with request body provides the ability to add more people to the existing list.

## How to run tests:
- unit tests          -   `npm run unitTest` runs a sample unit test i.e. `Array - indexOf()`
- integration tests   -   `npm run integrationTest` runs a sample `successful login scenario` @ `https://the-internet.herokuapp.com/login`

## Test Report:
- test reports are available under `./allure-report`
- run `allure open` on command line to bring up the integration test report available at `./allure-report/index.html`
