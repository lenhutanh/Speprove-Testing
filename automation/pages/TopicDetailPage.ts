import { Page } from '@playwright/test';

export class TopicDetailPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectFirstQuestion() {
    const firstQuestion = this.page.locator('a[href*="/practice/"]').first();
    await firstQuestion.waitFor({ state: 'visible' });
    await firstQuestion.click();
  }
}
