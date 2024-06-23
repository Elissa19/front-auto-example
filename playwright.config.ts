//конфигурация плейрайта, чтобы оно вообще работало
//импортируем классы самого плейрайта и нашу оберку, чтобы расширить базовые классы
import { defineConfig, devices } from '@playwright/test';
import { testPlanFilter } from "allure-playwright/testplan";
import { TestOptions } from './front/common/TestOptions';

//расширяем стандартный конфиг нашим кастомным классом (это называется фикстура)
export default defineConfig<TestOptions>({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './front/tests',
  // Run all tests in parallel.
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Если упало на CI (в гитлабе) - сколько раз перезапускать.
  retries: process.env.CI ? 2 : 0,
  // Если хочешь запускать тесты параллельно - количество воркеров тут, ставь столько, сколько надо.
  workers: process.env.CI ? 2 : 2,
  // В каком расширении готовить отчет
  // эта строка для дефолтного плейрайта
  // reporter: 'html',

  //а следуюшие две строки - аллюр
  //работает либо одно, либо второе, оба вместе - никак
  grep: testPlanFilter(),
  reporter: [["line"], ["allure-playwright"]],
  use: {
    // Базовая урла, на которую будем ходить.
    baseURL: 'https://www.mvideo.ru',
    ignoreHTTPSErrors: true,
    // Если тест упал, когда выводит трейс ошибки.
    trace: 'on-first-retry',
  },
  //сколько ждать, когда написано await
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  // Проекты здесь - это браузеры, в которых мы планируем запускать тесты.
  projects: [
    {
      name: 'chrome-test',
      use: {
        ...devices['Desktop Chrome'],
        envs: {
          url: 'https://www.mvideo.ru',
        },
      //а так можно настраивать ширину экрана для проверки разных разрешений
      // viewport: { width: 1280, height: 720 },
      actionTimeout: 10 * 1000,
      navigationTimeout: 30 * 1000,
      contextOptions: {
        ignoreHTTPSErrors: true,
        }
      },
    },
    //второй браузер
    //список доступных брайзеров и устройств можно посмотреть прямо в классе devices
    //для мобилок дополнительно накатывать классы с эмуляторами
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13'],
        envs: {
          url: 'https://www.mvideo.ru',
        },
      actionTimeout: 10 * 1000,
      navigationTimeout: 30 * 1000,
      contextOptions: {
        ignoreHTTPSErrors: true,
        },
      isMobile: true,
      },
    },
  ],
});