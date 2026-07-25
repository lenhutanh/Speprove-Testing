import { test, expect } from "../fixtures/fixtures";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Login Feature Tests", () => {
  test("TC-AUTH-004: Login successfully with valid credentials @smoke", async ({
    loginPage,
    page,
  }) => {
    await loginPage.navigate();
    await loginPage.login("user01@example.com", "user123654");
    await expect(page).toHaveURL(/.*\/(en|vi)?\/?$/, { timeout: 10000 });
  });

  const loginFailScenarios = [
    {
      id: "TC-AUTH-005",
      description: "Login failed with incorrect password",
      email: "user01@example.com",
      password: "WrongPassword123!",
      expectedMessage: "Invalid email or password",
    },
    {
      id: "TC-AUTH-006",
      description: "Login failed with unregistered email",
      email: "unregistered_user@example.com",
      password: "Password123!",
      expectedMessage: "Invalid email or password",
    }
  ];

  for (const scenario of loginFailScenarios) {
    test(`${scenario.id}: ${scenario.description} @regression`, async ({
      loginPage,
    }) => {
      await loginPage.navigate();
      await loginPage.login(scenario.email, scenario.password);

      await expect(
        loginPage.toast.filter({ hasText: scenario.expectedMessage }),
      ).toBeVisible({ timeout: 15000 });
    });
  }
});
