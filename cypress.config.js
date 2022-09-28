const { defineConfig } = require("cypress");
const cucumber =  require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'r3dj83',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
