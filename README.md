# LabInsights Playwright BDD Template

Playwright + BDD (`playwright-bdd`) template that opens https://stage.labinsights.com/, with BrowserStack Automate integrated.

## Setup

```bash
git clone <repo-url>
cd <repo-folder>
npm i
npx playwright install chromium
```

Add your BrowserStack credentials in `browserstack.yml`:

```yml
userName: YOUR_USERNAME
accessKey: YOUR_ACCESS_KEY
```

(Or export `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` instead. Don't commit real keys.)

## Run

Locally:

```bash
npm test
```

On BrowserStack Automate:

```bash
npm run test:browserstack
```

Results appear on the [Automate dashboard](https://automate.browserstack.com/).

## Structure

- `features/` – Gherkin feature files
- `steps/` – step definitions
- `pages/` – page objects
- `fixtures/` – registers page objects as fixtures
- `browserstack.yml` – BrowserStack config (browsers, build name)
- `.testcompanionrules/` – Test Companion rules and skills
