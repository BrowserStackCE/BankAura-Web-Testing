# Project structure

- Follow BDD: scenarios go in `features/*.feature`, step definitions in `steps/*.steps.js`.
- Every page gets a class in `pages/` extending `BasePage`; register it as a fixture in `fixtures/index.js`.
- Never put selectors or `page.*` calls in step files; call page object methods instead.
- Never hardcode credentials; BrowserStack credentials come from `browserstack.yml` or env vars.
