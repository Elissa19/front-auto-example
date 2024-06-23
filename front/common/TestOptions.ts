//наша кастомная тестовая обертка
//импортируем базовые тестовые классы плейрайта
import { test as base } from '@playwright/test';
//и все страницы, которые мы создали и будем создавать
import { BasePage } from '../pages/BasePage';
import { MainPage } from '../pages/MainPage';
import { CartPage } from '../pages/CartPage';
import { ProductPage } from '../pages/ProductPage';

//расширяем базовый класс
export const test = base.extend<TestOptions>({

//переопределяем переменные из конфига
  envs: [
    {
        url: '',
    },
    {
        option: true,
    }
  ],

  //описываем каждую созданную нами страницу, чтобы ее можно было использовать
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },

  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

//теперь кладем их в пакет для экспорта, чтобы тесты могли пользоваться нашеййй страницей
export type TestOptions = {
  envs: Envs;
  mainPage: MainPage;
  basePage: BasePage;
  cartPage: CartPage;
  productPage: ProductPage;
  };

//и переменные тоже экспортнем
export type Envs = {
  url?: string;
};
