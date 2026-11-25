const { BasePage } = require("./BasePage");

class DashboardPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    // Overview page greeting: h1 "Welcome back, demo_account"
    this.welcomeHeading = page.getByRole("heading", { name: /Welcome back, / });
    // Sidebar navigation (data-testid observed: nav-overview, nav-banking, ...)
    this.overviewNav = page.getByTestId("nav-overview");
    this.bankingNav = page.getByTestId("nav-banking");
    this.signOutButton = page.getByRole("button", { name: "Sign Out" });
  }

  async openBanking() {
    await this.bankingNav.click();
  }
}

module.exports = { DashboardPage };
