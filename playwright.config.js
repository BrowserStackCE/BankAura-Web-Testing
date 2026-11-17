const { defineConfig } = require("@playwright/test");
const { defineBddConfig } = require("playwright-bdd");

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps: ["steps/**/*.js", "fixtures/**/*.js"],
});

module.exports = defineConfig({
  testDir,
  timeout: 60000,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL || "https://stage.labinsights.com/",
    trace: "on-first-retry",
    headless: false,
  },
  projects: [
    {
      name: "chromium",
      use: {
        // Fixed viewport: a null viewport breaks Percy tile capture on BrowserStack
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
