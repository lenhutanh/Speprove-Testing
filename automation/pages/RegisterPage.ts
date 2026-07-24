import { Locator, Page } from "@playwright/test";

export class RegisterPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;
    readonly toast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
        this.registerButton = page.locator('button[type="submit"]');
        this.toast = page.locator('[data-sonner-toast]');
    }

    async navigate() {
        await this.page.goto('/register');
    }

    async register(email: string, password: string, confirmPassword: string) {
        await this.emailInput.click();
        await this.emailInput.focus();
        await this.emailInput.fill(email);
        await this.passwordInput.click();
        await this.passwordInput.focus();
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.click();
        await this.confirmPasswordInput.focus();
        await this.confirmPasswordInput.fill(confirmPassword);
        await this.registerButton.click();
    }
}
