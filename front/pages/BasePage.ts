//если у нас есть одинаковые методы, которые мы будем пользовать на всех страницах
//то почему бы не вынесть их в какой-нибудь базовый класс и не наследоваться от базового класса?
import { Page, test } from '@playwright/test';

export class BasePage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //вынесем переход по ссылке, а почему бы нет?
  async goto(url: string) {
    await test.step("Переход на страницу " + url, async () => {
      await this.page.goto(url);
    });
  }
}
