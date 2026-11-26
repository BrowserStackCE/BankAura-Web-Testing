const { expect } = require("@playwright/test");
const { Given, When, Then } = require("../fixtures");

Given("I open the BankAura landing page", async ({ loginPage }) => {
  await loginPage.open();
  await loginPage.goToSignIn();
  await expect(loginPage.heading).toBeVisible();
});

Given(
  "I sign in with the demo account",
  async ({ loginPage, dashboardPage }) => {
    await loginPage.useDemoAccount();
    // Demo login can take longer on remote browsers
    await expect(dashboardPage.welcomeHeading).toBeVisible({ timeout: 30000 });
  },
);

Then(
  "I should see the dashboard welcome message for the demo account",
  async ({ page, dashboardPage }) => {
    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(dashboardPage.welcomeHeading).toContainText(
      "Welcome back, demo_account",
    );
  },
);

Then(
  "the sidebar shows the Banking navigation item",
  async ({ dashboardPage }) => {
    await expect(dashboardPage.bankingNav).toBeVisible();
  },
);

When("I open the Banking tab", async ({ page, dashboardPage, bankingPage }) => {
  await dashboardPage.openBanking();
  await expect(page).toHaveURL(/\/dashboard\/banking$/);
  await expect(bankingPage.heading).toBeVisible();
  // Accounts load asynchronously ("Loading accounts..." is shown first)
  await expect(bankingPage.totalBalanceLabel).toBeVisible({ timeout: 30000 });
  await expect(bankingPage.transactionRows.first()).toBeVisible({
    timeout: 30000,
  });
});

When(
  "I click the Banking item in the sidebar using an incorrect locator",
  async ({ dashboardPage }) => {
    await dashboardPage.openBankingUsingIncorrectLocator();
  },
);

Then(
  "the Banking page heading and subtitle are shown",
  async ({ bankingPage }) => {
    await expect(bankingPage.heading).toBeVisible();
    await expect(bankingPage.subtitle).toBeVisible();
  },
);

Then(
  "the Accounts section lists the account balance and transactions",
  async ({ bankingPage }) => {
    await expect(bankingPage.totalBalanceLabel).toBeVisible();
    await expect(bankingPage.searchInput).toBeVisible();
    expect(await bankingPage.transactionRows.count()).toBeGreaterThan(0);
  },
);

Then("all six banking sub-tabs are available", async ({ bankingPage }) => {
  for (const tab of Object.values(bankingPage.subTabs)) {
    await expect(tab).toBeVisible();
  }
});
