const { BasePage } = require("./BasePage");
const { percyScreenshot } = require("@percy/playwright");

class HomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    // OneTrust cookie banner (id verified unique on the page)
    this.acceptCookiesButton = page.locator("#onetrust-accept-btn-handler");
    // "Built by practitioners" popup (Popup Maker); class verified unique
    this.practitionersOkButton = page.locator("button.btn-ok.pum-close");
    // Hero banner subscribe button; class locator verified on the live page (1 match, visible)
    this.subscribeNewsletterButton = page.locator(
      "button.herobanner-btn.subscribe-now-popup",
    );
  }

  /** Opens the application home page (baseURL from playwright.config.js). */
  async open() {
    await this.navigate("/");
  }

  /** Accepts cookies and dismisses the practitioners popup if they appear. */
  async acceptCookiesAndPopups() {
    await this.acceptCookiesButton.click({ timeout: 15000 });
    await this.practitionersOkButton.click({ timeout: 15000 });
  }

  /** Captures a named Percy visual screenshot of the current page state. */
  async captureVisual(name) {
    // Let late animations/popups settle, then freeze animations for a stable tile capture
    await this.page.waitForLoadState("networkidle").catch(() => {});
    await this.page.waitForTimeout(2000);
    await percyScreenshot(this.page, name, { freezeAnimation: true });
  }

  /** Pause so the page can be watched in the session video. */
  async pause(ms = 5000) {
    await this.page.waitForTimeout(ms);
  }
}

module.exports = { HomePage };
