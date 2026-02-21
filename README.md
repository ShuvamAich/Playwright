# 🎭 Playwright Course -- End-to-End Testing

This repository contains my learning journey, practice exercises, and
projects from the Playwright Course focused on modern **End-to-End
(E2E)** testing.

The goal of this project is to master automation testing for web
applications using JavaScript/TypeScript, covering everything from UI
interactions to CI/CD integration.

------------------------------------------------------------------------

## 📚 Course Overview

Playwright is a modern E2E testing framework developed by Microsoft that
ensures fast, reliable, and capable testing for the modern web.

-   🌐 **Cross-browser testing:** Chromium, Firefox, WebKit\
-   ⚡ **Fast and reliable:** No more "flaky" tests with auto-wait
    logic\
-   🎥 **Observability:** Built-in test tracing, videos, and
    screenshots\
-   🔄 **Concurrency:** Parallel test execution out of the box\
-   🧪 **Unified:** API testing and UI testing in one tool\
-   📱 **Mobile:** Emulation for responsive and mobile web testing

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Language:** TypeScript / Node.js\
-   **Framework:** [Playwright](https://playwright.dev/)\
-   **Runner:** Playwright Test Runner\
-   **Version Control:** Git & GitHub\
-   **CI/CD:** Jenkins / GitHub Actions

------------------------------------------------------------------------

## 🚀 Installation & Setup

### 1. Clone the repository:

``` bash
git clone https://github.com/your-username/playwright-course.git
cd playwright-course
```

### 2. Install dependencies:

``` bash
npm install
```

### 3. Install Playwright browsers:

``` bash
npx playwright install
```

### 4. Verify installation:

``` bash
npx playwright --version
```

------------------------------------------------------------------------

## ▶️ Running Tests

Run all tests:

``` bash
npx playwright test
```

Run tests in headed mode:

``` bash
npx playwright test --headed
```

Run tests in UI mode:

``` bash
npx playwright test --ui
```

Run a specific test file:

``` bash
npx playwright test tests/example.spec.ts
```

Run tests in debug mode:

``` bash
npx playwright test --debug
```

------------------------------------------------------------------------

## 📂 Project Structure

    playwright-course/
    │
    ├── tests/                  # Test specifications
    ├── pages/                  # Page Object Models
    ├── fixtures/               # Custom fixtures
    ├── utils/                  # Helper functions
    ├── test-data/              # Test data files
    ├── playwright.config.ts    # Playwright configuration
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 🧪 Topics Covered

-   Playwright fundamentals\
-   Locators & selectors\
-   Assertions & validations\
-   Handling forms and user interactions\
-   Page Object Model (POM)\
-   Auto-waiting & timeouts\
-   API testing\
-   Test hooks (beforeEach, afterEach)\
-   Fixtures and reusable setup\
-   Parallel execution\
-   Debugging & tracing\
-   Test reporting\
-   CI/CD integration

------------------------------------------------------------------------

## 🧩 Sample Test Example

``` typescript
import { test, expect } from '@playwright/test';

test('Verify homepage title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

------------------------------------------------------------------------

## 📊 Reporting

Generate and view the HTML report:

``` bash
npx playwright show-report
```

Open trace viewer:

``` bash
npx playwright show-trace trace.zip
```

------------------------------------------------------------------------

## 🔄 CI/CD Integration

Example GitHub Actions workflow:

``` yaml
name: Playwright Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
```

------------------------------------------------------------------------

## 🧠 Key Learnings

-   Writing stable and maintainable automation tests\
-   Implementing scalable Page Object Model architecture\
-   Reducing flakiness using Playwright auto-wait features\
-   Structuring automation frameworks professionally\
-   Debugging efficiently with trace viewer\
-   Integrating automated tests into CI/CD pipelines

------------------------------------------------------------------------

## 📌 Future Enhancements

-   Visual regression testing\
-   Dockerized test execution\
-   Test coverage integration\
-   Advanced reporting (Allure, custom dashboards)\
-   Cross-environment configuration support

------------------------------------------------------------------------

## 👨‍💻 Author

**Shuvam**\
Backend Developer \| Automation Enthusiast\
Passionate about building scalable and reliable test automation
frameworks
