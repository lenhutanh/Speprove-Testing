import { test as setup, expect } from '../fixtures/fixtures';
import path from 'path';

const authFile = path.join(__dirname, '..', '.auth', 'user.json');

setup('authenticate as user01', async ({ loginPage, page }) => {
  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;

  if (!email || !password) {
    throw new Error("Missing TEST_USER_EMAIL or TEST_USER_PASSWORD in environment variables. Please check your .env file.");
  }

  await loginPage.navigate();
  await loginPage.login(email, password);
  await expect(page).toHaveURL(/.*\/(en|vi)?\/?$/, { timeout: 15000 });
  await page.context().storageState({ path: authFile });
});
