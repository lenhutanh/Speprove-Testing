import { test as setup, expect } from '../fixtures/fixtures';
import path from 'path';

const authFile = path.join(__dirname, '..', '.auth', 'user.json');

setup('authenticate as user01', async ({ loginPage, page }) => {
  await loginPage.navigate();
  await loginPage.login('user01@example.com', 'user123654');
  await expect(page).toHaveURL(/.*\/(en|vi)?\/?$/, { timeout: 15000 });
  await page.context().storageState({ path: authFile });
});
