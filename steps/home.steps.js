const { expect } = require("@playwright/test");
const { Given, When, Then } = require("../fixtures");

Given("I navigate to the LabInsights home page", async ({ homePage }) => {
  await homePage.open();
  // Wait 5 seconds after the page loads so it is visible in the session video
  await homePage.pause(5000);
});

When("I accept the cookies and close the popup", async ({ homePage }) => {
  await homePage.acceptCookiesAndPopups();
});

Then(
  "I capture a visual snapshot named {string}",
  async ({ homePage }, name) => {
    await homePage.captureVisual(name);
  },
);

Then("I should see the Subscribe Newsletter button", async ({ homePage }) => {
  await expect(homePage.subscribeNewsletterButton).toBeVisible();
  // Wait 5 seconds after the button is detected so it is visible in the session video
  await homePage.pause(5000);
});
