import { Page, Locator } from '@playwright/test';

export class PracticePage {
  readonly page: Page;
  readonly recordButton: Locator;
  readonly stopButton: Locator;
  readonly sendButton: Locator;
  readonly latestAttempt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.recordButton = page.locator('button:has(svg.lucide-mic)');
    this.stopButton = page.locator('button:has(svg.lucide-square)');
    this.sendButton = page.locator('button:has(svg.lucide-send)');
    this.latestAttempt = page.locator('div.overflow-y-auto > div').first();
  }

  async startRecording() {
    await this.recordButton.waitFor({ state: 'visible' });
    await this.recordButton.click();
  }

  async stopRecording() {
    await this.stopButton.waitFor({ state: 'visible' });
    await this.stopButton.click();
  }

  async submitAttempt() {
    await this.sendButton.waitFor({ state: 'visible' });
    await this.sendButton.click();
  }
}
