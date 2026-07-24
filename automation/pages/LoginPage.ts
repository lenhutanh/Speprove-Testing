import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly toast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.toast = page.locator('[data-sonner-toast]');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async login(email: string, password: string) {
    await this.emailInput.click();
    await this.emailInput.focus();
    await this.emailInput.fill(email);
    await this.passwordInput.click();
    await this.passwordInput.focus();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
