# BankAura – Playwright BDD automation

Playwright + BDD (`playwright-bdd`) tests for the BankAura demo app (https://bankaura.vercel.app/), runnable locally and on BrowserStack Automate.

## Setup

```bash
npm install
```

Credentials are never stored in the repo. Export them before cloud runs:

```bash
export BROWSERSTACK_USERNAME=<your username>
export BROWSERSTACK_ACCESS_KEY=<your access key>
```

`BASE_URL` can be set to point the tests at a different environment (defaults to https://bankaura.vercel.app/).

## Running tests

| Command                     | What it does                                         |
| --------------------------- | ---------------------------------------------------- |
| `npm run bddgen`            | Generate Playwright specs from the feature files     |
| `npm test`                  | Generate and run locally (Chromium)                  |
| `npm run test:browserstack` | Generate and run on all BrowserStack platforms below |

## BrowserStack platforms

- Windows 11 – Chrome (latest)
- Windows 11 – Firefox (latest)
- macOS Sonoma – Safari / WebKit (latest)
- Samsung Galaxy S23 (Android 13) – Chrome, real device

## Scenarios

Feature: BankAura demo login and Banking tab. Each scenario starts by opening the landing page, going to Sign In and logging in with the demo account.

1. **Demo account login lands on the dashboard overview** – the URL is `/dashboard`, the heading reads "Welcome back, demo_account", and the sidebar shows the Banking item.
2. **Banking tab shows the account overview** – after opening Banking, the heading and subtitle show, the account balance and transactions are listed, and all six sub-tabs (Accounts, Transfer, Beneficiaries, Bill Pay, Cards, Statements) are available.
