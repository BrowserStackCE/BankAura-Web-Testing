const { test: base, createBdd } = require("playwright-bdd");
const { LoginPage } = require("../pages/LoginPage");
const { DashboardPage } = require("../pages/DashboardPage");
const { BankingPage } = require("../pages/BankingPage");

// Register every page object here so step definitions can request them as fixtures.
const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  bankingPage: async ({ page }, use) => {
    await use(new BankingPage(page));
  },
});

const { Given, When, Then } = createBdd(test);

module.exports = { test, Given, When, Then };
