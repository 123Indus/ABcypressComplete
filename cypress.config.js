const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    reporter: 'cypress-mochawesome-reporter',  //for html report  //this is also added
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);  //this is also added
    },
  },

  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    baseURL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login'

  }

});
