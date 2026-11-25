const { BasePage } = require("./BasePage");

class LoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    // Landing page header "Sign In" link (observed: link "Sign In" -> /login)
    this.headerSignInLink = page.getByRole("link", { name: "Sign In" });
    // Login form (data-testid / id observed on /login)
    this.heading = page.getByRole("heading", { name: "Sign in" });
    this.emailInput = page.getByTestId("login-email-input");
    this.passwordInput = page.getByTestId("login-password-input");
    this.signInButton = page.getByTestId("login-submit-btn");
    this.demoLoginButton = page.getByTestId("demo-login-btn");
  }

  async open() {
    // Absolute URL: with BrowserStack accessibility on, Chrome/Edge drop baseURL
    await this.navigate(process.env.BASE_URL || "https://bankaura.vercel.app/");
  }

  async goToSignIn() {
    await this.headerSignInLink.click();
  }

  async useDemoAccount() {
    await this.demoLoginButton.click();
  }
}

module.exports = { LoginPage };
