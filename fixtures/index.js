const { test: base, createBdd } = require("playwright-bdd");
const { HomePage } = require("../pages/HomePage");

// Register every page object here so step definitions can request them as fixtures.
const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

const { Given, When, Then } = createBdd(test);

module.exports = { test, Given, When, Then };
