import { Page } from '@playwright/test';

export class ForecastDetailPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectFirstTopic() {
    const firstTopic = this.page.locator('a:has(h3)').first();
    await firstTopic.waitFor({ state: 'visible' });
    await firstTopic.click();
  }
}
