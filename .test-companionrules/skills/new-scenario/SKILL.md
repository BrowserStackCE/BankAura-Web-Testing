---
name: add-new-scenario
description: Use when adding a new BDD scenario with its page object and step definitions.
---

## When to use

A new user flow needs automating in this Playwright BDD project.

## Steps

1. Add the scenario to a `.feature` file in `features/`.
2. Create or extend a page object in `pages/` (extend `BasePage`).
3. Register new page objects as fixtures in `fixtures/index.js`.
4. Write step definitions in `steps/` that only call page object methods.
5. Run `npm test` locally, then `npm run test:browserstack`.

## Verification

The scenario passes locally and appears in the BrowserStack Automate dashboard.
