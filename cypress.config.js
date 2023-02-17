const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://www.vouchercodes.co.uk",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
