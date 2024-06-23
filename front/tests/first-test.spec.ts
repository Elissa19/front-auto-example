//класс, в котором пишутся тесты. всегда имеет приписку spec в названии, иначе нещитово

//импортируем наши базовые тестовые методы из кастомного файла
import { test } from '../common/TestOptions';

//объявляем переменную - ссылку на окружение (сайт, на который будем ломиться)
let envUrl;

//а поскольку тестов много и перед каждым из них надо делать одни и те же действия (открыть страницу),
//организовываем метод, котрый будет запускаться перед каждым тестом
//независимо от порядка самих тестов - это надежно
test.beforeEach(async ({ basePage, envs }) => {
  envUrl = envs.url;
  await basePage.goto(envUrl);
});

//и непосредственно сами наши тесты
//test.describe - это большой блок тестов (типа тест-сьют),
//в который понапиханы маленькие (типа тест-кейсы)
//parallel - при прописанных в конфиге плейрайта воркерах больше чем 1,
//тесты будут запускаться параллельно

//вот это наш тест-сьют
test.describe.parallel('С почином, первые тесты', async () => {
//а вся эта мелкота - его начинка
  test('Главная страница открывается', async ({ mainPage }) => {
    await mainPage.isPageOpen();
  });

  test('Ищем в поиске холодильник', async ({ mainPage, productPage }) => {
    await mainPage.isPageOpen();
    await mainPage.searchItem();
    await productPage.isPageOpen();
  });

  test('Открываем каталог', async ({ mainPage }) => {
    await mainPage.isPageOpen();
    await mainPage.openCatalog();
  });

  test('Переходим в корзину', async ({ mainPage, cartPage }) => {
    await mainPage.isPageOpen();
    await mainPage.openCart();
    await cartPage.isPageOpen();
  });
// и еще несметное множество тестов
});
