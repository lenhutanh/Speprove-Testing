import { test, expect } from '../fixtures/fixtures';

test.describe('Register Feature Tests', () => {
  test('TC-AUTH-001: Register successfully with dynamic credentials and verify OTP @smoke', async ({ registerPage, verifyOtpPage, page }) => {
    const dynamicEmail = `testuser_${Date.now()}@example.com`;
    const password = 'Password123!';

    await registerPage.navigate();
    await expect(page).toHaveURL(/.*\/register/);

    await registerPage.register(dynamicEmail, password, password);

    await expect(page).toHaveURL(/.*\/verify-otp/, { timeout: 15000 });

    await verifyOtpPage.verifyOtp('123456');

    await expect(page).toHaveURL(/.*\/login/, { timeout: 15000 });
    await expect(
      verifyOtpPage.toast.filter({ hasText: 'Create account successfully.' })
    ).toBeVisible();
  });

  test('TC-AUTH-002: Register failed with email already registered @regression', async ({ registerPage, page }) => {
    await registerPage.navigate();
    await registerPage.register('user01@example.com', 'Password123!', 'Password123!');

    await expect(
      registerPage.toast.filter({ hasText: 'Account already exists' })
    ).toBeVisible({ timeout: 15000 });
    await expect(page).toHaveURL(/.*\/register/);
  });

  test('TC-AUTH-003: Register failed with invalid OTP @regression', async ({ registerPage, verifyOtpPage, page }) => {
    const dynamicEmail = `testuser_${Date.now()}@example.com`;
    const password = 'Password123!';

    await registerPage.navigate();
    await registerPage.register(dynamicEmail, password, password);

    await expect(page).toHaveURL(/.*\/verify-otp/, { timeout: 15000 });

    // Enter wrong OTP
    await verifyOtpPage.verifyOtp('000000');

    await expect(
      verifyOtpPage.toast.filter({ hasText: 'OTP is invalid or has expired' })
    ).toBeVisible({ timeout: 15000 });
    await expect(page).toHaveURL(/.*\/verify-otp/);
  });
});
