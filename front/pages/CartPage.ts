import { expect, Locator, Page, test } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

  readonly page: Page;
  readonly cartModule: Locator;
  readonly backButton: Locator;
  readonly chatButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cartModule = page.locator("[class='cart']");
    this.backButton = page.locator("[class='secondary-header__back-button-title']");
    this.chatButton = page.getByRole('button', { name: 'Чат' });
  }

  //а этот метод не получится упереть в общие, он для всех классов разный
  async isPageOpen() {
    await test.step("Страница корзины открыта", async () => {;
      await expect(this.cartModule).toBeVisible();
      await expect(this.backButton).toBeVisible();
      await expect(this.chatButton).toBeVisible();
    });
  }
  //а тут придумать что-нибудь еще
}
