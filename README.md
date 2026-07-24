# Speprove QA Testing Portfolio Guide

Welcome to the **Speprove QA Testing Portfolio** workspace. 

This repository is designed to demonstrate your hands-on QA skills for the **KMS Technology Full-stack Test Engineer Intern** position. All theoretical documentation has been pre-written and structured professionally in the `docs/` folder.

Your task is to implement the automated API tests, UI end-to-end tests, and CI/CD pipelines following the guidelines below.

---

## 1. Portfolio Structure & Scope

The testing scope is divided into 4 core user-centric features:
1. **Feature 1: Register (Đăng ký)**
2. **Feature 2: Login (Đăng nhập)**
3. **Feature 3: Logout (Đăng xuất)**
4. **Feature 4: Practice Speaking (Luyện tập phát âm)**

The documentation is organized in:
* **[docs/TestPlan.md](file:///d:/IT/Speprove/speprove-testing/docs/TestPlan.md):** Strategy, Scope, and Risk Assessment.
* **[docs/test-cases/](file:///d:/IT/Speprove/speprove-testing/docs/test-cases/):** Folder containing individual test case files in a globally increasing sequence (e.g. `001_login_success.md`, `002_login_incorrect_password.md`).
* **[docs/test-cases/template/test_case_template.md](file:///d:/IT/Speprove/speprove-testing/docs/test-cases/template/test_case_template.md):** Standard test case template for duplication.
* **[docs/BugReports.md](file:///d:/IT/Speprove/speprove-testing/docs/BugReports.md):** UI/UX issues and validation errors.
* **[docs/TestSummary.md](file:///d:/IT/Speprove/speprove-testing/docs/TestSummary.md):** Defect metrics and test coverage report.

---

## 2. Step-by-Step Implementation Roadmap

### Step 1: Initialize Project & Setup Playwright
1. Initialize the npm/pnpm package:
   ```bash
   pnpm init
   ```
2. Install Playwright:
   ```bash
   pnpm create playwright
   ```
   * Choose **TypeScript**.
   * Name your test folder `automation`.
   * Add a GitHub Actions workflow.

### Step 2: Implement Page Object Model (POM)
Create your page classes under `automation/pages/`:
* `LoginPage.ts`: Define locators for email, password, login button, and error alerts. Add a `login(email, password)` method.
* `RegisterPage.ts`: Define locators for registration inputs, terms checkbox, and register button.
* `PracticePage.ts`: Define locators for question title, record/stop/submit buttons, score details, and history tab.

### Step 3: Set up Custom Playwright Fixtures
Create `automation/fixtures/fixtures.ts` to extend the test runner:
* Import your page object classes.
* Extend the test fixture so that `loginPage`, `registerPage`, and `practicePage` are instantiated automatically before each test.

### Step 4: Write Automation Specs (with tags)
Under `automation/e2e/` (for UI tests) and `automation/api/` (for API tests):
* Create `login.spec.ts`, `register.spec.ts`, `logout.spec.ts`, and `practice.spec.ts`.
* Implement the automated tests using the custom fixtures.
* Annotate tests with `@smoke` (critical flows) or `@regression` (validations, boundary checks).
* Run tests locally:
   ```bash
   pnpm test:smoke
   ```

### Step 5: Implement API Testing (Postman/Bruno)
Create a new Postman/Bruno collection in `postman/`:
* Group API requests into **Authentication** and **Practice Speaking** folders.
* Write JS tests to verify status codes (e.g. 200, 401, 400).
* Implement negative testing scenarios (e.g., login with empty body, invalid token authorization).

### Step 6: Configure CI/CD (GitHub Actions)
* Set up a workflow in `.github/workflows/playwright.yml` to trigger the test suite on code pushes.
* Configure it to run Playwright tests and upload the HTML reports as artifacts.
