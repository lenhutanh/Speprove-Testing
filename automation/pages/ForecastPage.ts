import { Page, Locator } from '@playwright/test';

export class ForecastPage {
  readonly page: Page;
  readonly forecastLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.forecastLink = page.locator('a[href*="/forecast/"]');
  }

  async navigate() {
    await this.page.goto('/forecast');
    await this.page.waitForLoadState('networkidle');
  }

  async selectFirstForecast() {
    await this.forecastLink.first().waitFor({ state: 'visible' });
    await this.forecastLink.first().click();
  }
}
