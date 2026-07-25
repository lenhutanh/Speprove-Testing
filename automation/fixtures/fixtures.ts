import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { VerifyOtpPage } from '../pages/VerifyOtpPage';
import { ForecastPage } from '../pages/ForecastPage';
import { ForecastDetailPage } from '../pages/ForecastDetailPage';
import { TopicDetailPage } from '../pages/TopicDetailPage';
import { PracticePage } from '../pages/PracticePage';

type MyFixtures = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
  verifyOtpPage: VerifyOtpPage;
  forecastPage: ForecastPage;
  forecastDetailPage: ForecastDetailPage;
  topicDetailPage: TopicDetailPage;
  practicePage: PracticePage;
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
  forecastPage: async ({ page }, use) => {
    await use(new ForecastPage(page));
  },
  forecastDetailPage: async ({ page }, use) => {
    await use(new ForecastDetailPage(page));
  },
  topicDetailPage: async ({ page }, use) => {
    await use(new TopicDetailPage(page));
  },
  practicePage: async ({ page }, use) => {
    await use(new PracticePage(page));
  },
});

export { expect } from '@playwright/test';
