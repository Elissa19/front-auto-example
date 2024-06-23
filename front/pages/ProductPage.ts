import { expect, Locator, Page, test } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {

  readonly page: Page;
  readonly productList: Locator;
  readonly filterList: Locator;
  readonly productCard: Locator;

  constructor(page: Page) {
    super(page);
    this.productList = page.locator("[class='product-list ng-star-inserted']");
    this.filterList = page.locator("[class='accordion-title']");
    this.productCard = page.locator("[class='product-card-wrapper ng-star-inserted']");
  }

  //а этот метод не получится упереть в общие, он для всех классов разный
  async isPageOpen() {
    await test.step("Страница корзины открыта", async () => {
      await expect(this.productList).toBeVisible();
      await expect(this.filterList.all).toBeTruthy();
      await expect(this.productCard.all).toBeTruthy();
    });
  }
  //а тут придумать что-нибудь еще
}
