# front-auto-example

Удобные плагины для VSCode:
ESlint
Prettier ESLInt
GitGraph
Playwright test for VSCode
Playwright test runner

# Install packages for Ubuntu
Поставить nodejs
`sudo apt install nodejs`

Накатить пакеты npm
`sudo apt install npm` (для линукс) `npm install` (для мак)

Накатить пакеты плейрайта
`npm init playwright@latest` (для линукс)  `npx playwrigth install` (для мак)


`npx playwright install-deps`

# Install Allure

Накинуть ему джавы или переустановить ее, чтобы пересчитались все пакеты
`sudo apt reinstall openjdk-17-jdk`

Накатить сам аллюр
`npm install --save-dev allure-commandline`

`npm install --save-dev allure-playwright`

Возможно, потребуется сбросить переменные для VSCode

`unset GTK_PATH`

`unset GIO_MODULE_DIR`

# Run tests

Запуск тестов - внимание - вообще всех написанных тестов!
`npx playwright test`

Показать дефолтный репорт плейрайта (страничка в браузере)
`npx playwright show-report`

Показать аллюрный репорт
`npx allure serve allure-results`