const { test } = require("@playwright/test");
const { percyScreenshot } = require("@percy/playwright");
test("probe simple page", async ({ page }) => {
  await page.goto("https://example.com");
  await percyScreenshot(page, "probe example.com");
});
