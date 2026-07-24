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

  const registerFailScenarios = [
    {
      id: "TC-AUTH-002",
      description: "Register failed with email already registered",
      email: "user01@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
      expectedErrorType: "toast",
      expectedMessage: "Account already exists",
    },
    {
      id: "TC-AUTH-003",
      description: "Register failed with password mismatch",
      email: `testuser_${Date.now()}@example.com`,
      password: "Password123!",
      confirmPassword: "DifferentPassword123!",
      expectedErrorType: "validation",
      expectedMessage: "Mật khẩu xác nhận không khớp",
    }
  ];

  for (const scenario of registerFailScenarios) {
    test(`${scenario.id}: ${scenario.description} @regression`, async ({ registerPage, page }) => {
      await registerPage.navigate();
      await registerPage.register(scenario.email, scenario.password, scenario.confirmPassword);

      if (scenario.expectedErrorType === "toast") {
        await expect(
          registerPage.toast.filter({ hasText: scenario.expectedMessage })
        ).toBeVisible({ timeout: 15000 });
      } else if (scenario.expectedErrorType === "validation") {
        await expect(page.locator(`text=${scenario.expectedMessage}`)).toBeVisible();
        await expect(page).toHaveURL(/.*\/register/);
      }
    });
  }

  test('TC-AUTH-004: Register failed with invalid OTP @regression', async ({ registerPage, verifyOtpPage, page }) => {
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
