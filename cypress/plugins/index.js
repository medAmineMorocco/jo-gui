const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    on("task", percyHealthCheck);
    require('cypress-react-unit-test/plugins/react-scripts')(on, config);
    on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
            launchOptions.args.push('--disable-dev-shm-usage')
            return launchOptions;
        }

        return launchOptions;
    })
    return config;
};
