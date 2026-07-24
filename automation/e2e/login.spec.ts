import { test, expect } from "../fixtures/fixtures";

test.describe("Login Feature Tests", () => {
  test("TC-AUTH-005: Login successfully with valid credentials @smoke", async ({
    loginPage,
    page,
  }) => {
    await loginPage.navigate();
    await loginPage.login("user01@example.com", "user123654");
    await expect(page).toHaveURL(/.*\/(en|vi)?\/?$/, { timeout: 10000 });
  });

  const loginFailScenarios = [
    {
      id: "TC-AUTH-006",
      description: "Login failed with incorrect password",
      email: "user01@example.com",
      password: "WrongPassword123!",
      expectedErrorType: "toast",
      expectedMessage: "Invalid email or password",
    },
    {
      id: "TC-AUTH-007",
      description: "Login failed with empty email field",
      email: "",
      password: "Password123!",
      expectedErrorType: "validation",
      expectedMessage: "Trường này là bắt buộc",
    },
    {
      id: "TC-AUTH-008",
      description: "Login failed with unregistered email",
      email: "unregistered_user@example.com",
      password: "Password123!",
      expectedErrorType: "toast",
      expectedMessage: "Invalid email or password",
    }
  ];

  for (const scenario of loginFailScenarios) {
    test(`${scenario.id}: ${scenario.description} @regression`, async ({
      loginPage,
      page,
    }) => {
      await loginPage.navigate();
      await loginPage.login(scenario.email, scenario.password);

      if (scenario.expectedErrorType === "toast") {
        await expect(
          loginPage.toast.filter({ hasText: scenario.expectedMessage }),
        ).toBeVisible({ timeout: 15000 });
      } else if (scenario.expectedErrorType === "validation") {
        await expect(page).toHaveURL(/.*\/login/);
        await expect(
          page.locator(`text=${scenario.expectedMessage}`),
        ).toBeVisible();
      }
    });
  }
});
