# 🚀 Speprove Test Automation Framework

[![TypeScript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/PLAYWRIGHT-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![pnpm](https://img.shields.io/badge/PNPM-F6A918?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![GitHub Actions](https://img.shields.io/badge/GITHUB_ACTIONS-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

📝 **Overview**  
This repository contains a comprehensive Automated Testing Framework built to validate the frontend UI/UX flows and REST API endpoints of the **Speprove** English Speaking Practice platform.

The framework is engineered to ensure application stability, prevent regressions, and maximize code maintainability by applying industry-standard design patterns and modern test automation practices.

---

## 🏗️ Architecture & Design Patterns

* **Page Object Model (POM):** Encapsulates UI locators and page interactions to separate test logic from UI implementation.
* **Custom Test Fixtures:** Extends the default Playwright test runner to automatically instantiate Page Object classes, reducing boilerplate setup.
* **Resource-Based API Testing:** Organizes REST API tests into isolated, resource-specific spec files using Playwright's native request context.
* **Shared Authentication State:** Authenticates once via global setup (`auth.setup.ts`) and reuses the cached authentication state (`storageState`) across UI and API tests.
* **Hardware Simulation:** Emulates microphone input in headless browsers by injecting a predefined audio file (`sample.wav`) for deterministic speech testing.

---

## 🛠️ Tech Stack

- **Programming Language:** TypeScript
- **Automation Framework:** Playwright
- **Package Manager:** pnpm
- **CI/CD:** GitHub Actions

## 🎯 Testing Scope

- End-to-End (E2E) UI Testing
- API Integration Testing
- Smoke Testing
- Regression Testing

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── playwright.yml     # GitHub Actions CI workflow configuration
├── automation/
│   ├── api/                   # Isolated REST API Tests (Resource-based)
│   │   ├── login.api.spec.ts  # Login API (Success, Fail, Validation)
│   │   ├── register.api.spec.ts# Register & Verify OTP API Tests
│   │   ├── file.api.spec.ts   # Audio Upload APIs
│   │   └── attempt.api.spec.ts# Attempt Submission, Details & Retry APIs
│   ├── e2e/                   # UI End-to-End Tests
│   │   ├── auth.setup.ts      # Global Login setup (Generates storageState)
│   │   ├── login.spec.ts      # Guest UI Login Tests
│   │   ├── register.spec.ts   # Guest UI Register & OTP Verification Tests
│   │   └── practice.spec.ts   # Speaking Practice UI Tests (WAV Audio mock injection)
│   ├── assets/                # Audio mock files (sample.wav for microphone testing)
│   ├── constants/             # Shared API status and error codes constants
│   ├── fixtures/              # Custom Playwright Fixtures
│   ├── pages/                 # Page Object Model classes
│   ├── utils/                 # Audio and timing utility helpers
│   └── playwright.config.ts   # Playwright Framework Configurations
├── docs/                      # QA Documentation
│   ├── decision-tables/       # Decision Tables for complex business logic
│   │   ├── login-decision-table.md
│   │   └── register-decision-table.md
│   └── test-cases/            # Structured Markdown Test Cases (001 - 010)
├── .env.example               # Environment variables template
├── .gitignore                 # Excludes local sessions (.auth/) and environment secrets (.env)
├── package.json               # Node.js project manifest & scripts
└── tsconfig.json              # TypeScript compilation configuration
```

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v18 or higher / LTS)
- pnpm package manager (`npm install -g pnpm`)
- Google Chrome, Firefox, or Safari browser

### Installation & Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Speprove-Testing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Speprove-Testing
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
5. Configure your credentials and target application URL in `.env`:
   ```env
   BASE_URL=https://speprove.vercel.app
   TEST_USER_EMAIL=your_test_user@example.com
   TEST_USER_PASSWORD=your_secure_test_password
   ```

---

## ⚙️ Execution

To run the automated test suite, use the following commands:

### 1. Run All Tests (E2E & API)
Runs the global authentication setup first, then executes all E2E and API specs:
```bash
pnpm test:all
```

### 2. Run UI E2E Tests Only
```bash
npx playwright test --config=automation/playwright.config.ts automation/e2e
```

### 3. Run API Tests Only
```bash
npx playwright test --config=automation/playwright.config.ts automation/api
```

### 4. Run Tests in Interactive UI Mode
```bash
npx playwright test --config=automation/playwright.config.ts --ui
```

---

## 📊 Reporting

This framework utilizes Playwright's built-in HTML Reporter to generate detailed test execution reports (including screenshots, video recordings, and network logs for failed tests).

After running the tests, to generate and view the interactive HTML report in your default browser, run:
```bash
pnpm report
```

---

## ☁️ CI/CD Pipeline (GitHub Actions)

The test suite is integrated with GitHub Actions (`.github/workflows/playwright.yml`) for automated runs.
- **Triggers:** Automatically executes on code pushes/PRs to `main`/`master`, or manually via the **Run workflow** button (`workflow_dispatch`).
- **Secrets Injection:** Securely maps `BASE_URL`, `TEST_USER_EMAIL`, and `TEST_USER_PASSWORD` from GitHub Repository Secrets to the running environment.
- **Artifact Preservation:** The HTML test report is uploaded and stored on GitHub Actions for every pipeline run.

---

## 💡 Key Highlights for Recruitment

- **Core Module Coverage:** Automated critical user journeys including Authentication (Register, OTP, Login) and Speaking Practice workflows.
- **Deterministic Speech Testing:** Emulated microphone input in headless environments by injecting mock audio files (`sample.wav`) to support speech testing in CI pipelines.
- **Efficient Session Sharing:** Shared authentication states globally across UI and API tests to minimize repetitive login steps and reduce execution time.
- **Clean Framework Architecture:** Ensured strict separation of concerns by keeping assertions exclusively in the test spec files, leaving page objects focused solely on locators and actions.
