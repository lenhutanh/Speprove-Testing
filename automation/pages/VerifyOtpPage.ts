import { Locator, Page } from "@playwright/test";

export class VerifyOtpPage {
    readonly page: Page;
    readonly otpInput: Locator;
    readonly verifyButton: Locator;
    readonly toast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.otpInput = page.locator('form input');
        this.verifyButton = page.locator('button[type="submit"]');
        this.toast = page.locator('[data-sonner-toast]');
    }

    async verifyOtp(otp: string) {
        await this.otpInput.click();
        await this.otpInput.focus();
        await this.otpInput.fill(otp);
        await this.verifyButton.click();
    }
}
