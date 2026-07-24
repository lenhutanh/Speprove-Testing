import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { VerifyOtpPage } from '../pages/VerifyOtpPage';

type MyFixtures = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
  verifyOtpPage: VerifyOtpPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  verifyOtpPage: async ({ page }, use) => {
    await use(new VerifyOtpPage(page));
  },
});

export { expect } from '@playwright/test';
