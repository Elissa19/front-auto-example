//конструктор страницы
//импортируем тестовые методы наши тестовые данные
import { expect, Locator, Page, test } from '@playwright/test';
import { TypeOfProducts } from '../common/testData/commonTestData';
import { BasePage } from './BasePage';

//обозначаем наш класс и делаем его открытым, чтобы к нему могли обратиться из других файлов
export class MainPage extends BasePage {

  //список тех вещей, которые мы ждем на странице

  //собственно, сама страница
  readonly page: Page;

  //и ее наполнение
  readonly loginButton: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly locationConfirm: Locator;
  readonly catalogButton: Locator;
  readonly catalogDrawer: Locator;
  readonly cartButton: Locator;

  //из вышенаписанной ботвы конструируем наши ожидания
  constructor(page: Page) {
    //страницу мне запили, ага
    super(page);
    this.loginButton = page.locator("[class='nav-tab tab-profile']");
    this.searchInput = page.locator("[class='input__field input__field--indent-from-icon']");
    this.searchButton = page.locator("[class='search-icon-wrap']");
    this.locationConfirm = page.locator('css=[class^=location-confirm]');
    this.catalogButton = page.locator("[class='button__label']");
    this.catalogDrawer = page.locator("[class='catalog-container__grid-container']");
    this.cartButton = page.locator("[class='nav-tab tab-cart']");

    //можно еще так искать элементы на странице, главное - надежно зацепиться
    //this.search = page.locator('css=[class^=CatalogMenu_catalogInput__]');
    //this.x = page.getByRole('button', {name: 'Login'})
  }

  //а этот метод не получится упереть в общие, он для всех классов разный
  async isPageOpen() {
    await test.step('Главная страница открыта', async () => {
      await this.locationConfirm.click();
      await expect(this.loginButton).toBeVisible();
      await expect(this.searchInput).toBeVisible();
      await expect(this.catalogButton).toBeVisible();
      await expect(this.cartButton).toBeVisible();
    });
  }

  async searchItem() {
    await test.step('Ищем что-нибудь в поиске', async () => {
      await expect(this.searchInput).toBeVisible();
      //заполняем строку поиска нашими данными
      await this.searchInput.fill(TypeOfProducts.fridge.value);
      await this.searchButton.click();
      //тут не проверяем, че там по итогам поиска, это посмотрим в другом месте
    });
  }

  async openCatalog() {
    await test.step('Открываем каталог', async () => {
      await expect(this.catalogButton).toBeVisible();
      await this.catalogButton.click();
      await expect(this.catalogDrawer).toBeVisible();
    });
  }

  async openCart() {
    await test.step('переходим в корзину с главной страницы', async () => {
      await expect(this.cartButton).toBeVisible();
      await this.cartButton.click();
      //тут не проверяем, удачно ли мы перешли в корзину, здесь методы главной страницы
      //страницу корзины проверим в другом месте
    });
  }
}
