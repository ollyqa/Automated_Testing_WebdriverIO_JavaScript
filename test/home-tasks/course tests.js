import assert from "assert/strict";
import { browser, expect } from "@wdio/globals";
import LoginPage from "./../pages/main.page.js";
import GithubPage from "./../home-tasks/final-home-task/github.page.js";

describe("Webdriverio main page", () => {
  xit("should have correct title", async () => {
    await browser.url(`https://webdriver.io/`);

    const title = await browser.getTitle();
    console.log(title);

    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO",
    );
  });
  //Вивести заголовок

  xit("should show addValue command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let input = await $("#username");
    await input.addValue("hello");
    await browser.pause(2000);

    await input.addValue("123");
    await browser.pause(2000);

    await expect(input).toHaveValue("hello123");
  });
  //Додати значення та перевірити що воно введено

  xit("should show setValue command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let input = await $("#username");
    await input.setValue("world");
    await browser.pause(2000);

    console.log(await input.getValue());
    await expect(input).toHaveValue("world");
  });
  //Встановити значення та перевірити що воно введено

  xit("should show click command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let loginButton = await $(".radius");
    await browser.pause(2000);
    await loginButton.click();
    await browser.pause(4000);

    let inputUsername = await $("#username");
    await inputUsername.addValue("olhamorhun");
    await browser.pause(2000);

    let inputPassword = await $("#password");
    await inputUsername.addValue("SuperSecretPassword!");
    await browser.pause(2000);

    await loginButton.click();
    await browser.pause(4000);
  });
  //Клікнути кнопку та ввести логін та пароль

  xit("should show getAttribute command", async () => {
    await browser.url(`https://dou.ua/search`);

    let inputSearch = await $("#gsc-i-id1");
    let attr = await inputSearch.getAttribute("aria-label");
    console.log("Placeholder attribute is: " + attr);

    await inputSearch.setValue("Cat");
    attr = await inputSearch.getValue("Cat");
    await browser.pause(2000);
    console.log("Value attribute is: " + attr);
  });
  //Взяти атрибут, вивести в консоль, внести і перевірити дані

  xit("should show getLocation command", async () => {
    await browser.url(`https://dou.ua`);

    let inputSearch = await $("#txtGlobalSearch");
    let location = await inputSearch.getLocation();
    console.log("Location is: " + location); //outputs x,y

    let xLocation = await inputSearch.getLocation("x");
    console.log("Location by x is: " + xLocation); //outputs x
  });
  // Взяти та вивести локацію по осі x,y а потім тільки по x

  xit("should show getText command", async () => {
    await browser.url(`https://webdriver.io/`);

    let subtitle = await $(".hero__subtitle");
    console.log("Subtitle text is: " + (await subtitle.getText()));
  });
  // Взяти текст елемента та вивести на екран

  xit("should show if an element is clikable", async () => {
    await browser.url(`https://webdriver.io/`);

    const blogButton = await $('[href="/docs/gettingstarted"]');
    let clickable = await blogButton.isClickable(); // ✅ isClickable, не isClicable
    console.log("Is clickable: " + clickable);
  });
  // Перевірити, що кнопка клікабельна

  xit("should show if an element is displayed", async () => {
    await browser.url(`https://webdriver.io/`);

    const blogButton = await $('[href="/docs/gettingstarted"]');
    let displayed = await blogButton.isDisplayed();
    console.log("Is displayed: " + displayed);
  });
  // Перевірити, що елемент відображено

  /*xit("should show if an element is visible", async () => {
    await browser.url(`https://webdriver.io/`);

    const blogButton = await $('[href="/docs/gettingstarted"]');
    let displayedInViewport = await blogButton.isDisplayedInViewport();
    console.log("Is blog button displayed in viewport: " + displayedInViewport);
  });*/

  xit("should show if an element is visible", async () => {
    await browser.url(`https://webdriver.io/`);

    const blogButton = await $('[href="/docs/gettingstarted"]');

    console.log("blogButton:", blogButton);
    console.log("typeof blogButton:", typeof blogButton);
    console.log("exists:", await blogButton.isExisting());

    let displayedInViewport = await blogButton.isDisplayedInViewport();
    console.log("Is blog button displayed in viewport: " + displayedInViewport);
  });

  xit("should show if an element is enabled", async () => {
    await browser.url(`https://webdriver.io/`);

    const getStartedButton = await $('a[href="/docs/gettingstarted"]');
    let isEnabled = await getStartedButton.isEnabled();
    console.log("Is get started button enabled: " + isEnabled);
  });

  // Перевірити, що елемент активний

  xit("should show if an element is focused", async () => {
    await browser.url(`https://webdriver.io/`);

    const getStartedButton = await $('a[href="/docs/gettingstarted"]');

    let isFocused = await getStartedButton.isFocused();
    console.log("Is get started button focused before click: " + isFocused);

    await browser.pause(2000);
    await getStartedButton.click();

    isFocused = await getStartedButton.isFocused();
    console.log("Is get started button focused after click: " + isFocused);
    await browser.pause(2000);
  });
  //Перевірити, що є фокус після кліку на кнопку

  xit("should show movement to element action", async () => {
    await browser.url(`https://webdriver.io/`);

    const getStartedLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]',
    );
    await browser.pause(2000);
    await getStartedLink.scrollIntoView();
    await browser.pause(2000);
  });
  // Скрол до елемента

  xit("should show save screenshot command", async () => {
    await browser.url(`https://webdriver.io`);

    const getStartedLink = await $(
      '.footer__link-item[href="/docs/gettingstarted"]',
    );
    await browser.pause(2000);
    await getStartedLink.scrollIntoView();
    await browser.pause(2000);
    await getStartedLink.saveScreenshot("linkScreenshot.png");
  });
  // Скрол до елемента + скріншот

  xit("should switch to another window", async () => {
    await browser.url(`https://webdriver.io`);

    await browser.newWindow(`https://google.com`);
    await browser.pause(2000);

    await browser.switchWindow(`https://webdriver.io`);
    await browser.pause(2000);
  });
  // Нове вікно + переключити вікно назад

  xit("should show waitUntil command", async () => {
    await browser.url(`https://webdriver.io`);

    await browser.waitUntil(
      async () => {
        return $('a[href="/docs/gettingstarted"]').isDisplayed();
      },
      { timeout: 5000, timeoutMsg: "Button is not displayed" },
    );
  });
  // Чекати 5000 мілісекунд, що кнопка відобразилась чи ні

  xit("should get html for certain elements", async () => {
    await browser.url(`https://webdriver.io`);

    /* const outerHTML = await $(".dropdown__menu").getHTML();
    console.log("outerHTML: " + outerHTML);

    const innerHTML = await $(".dropdown__menu").getHTML(false);
    console.log("innerHTML: " + innerHTML);*/
    assert(1 === 1, "1 not equal 1");
    assert(1 === "hello", "1 not equal hello");
    //Порівнює та показує повідомлення в терміналі, якщо не рівне
  });
  // Взяти значення ззовні та всередині тегу
});
describe.skip("Webdriverio main page", () => {
  it("should show addValue command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    await LoginPage.setUsernameInput(123);
    await browser.pause(2000);
    //цей метод більш правильний, менше коду

    await LoginPage.username.addValue("hello");
    await browser.pause(2000);

    await LoginPage.setPasswordInput("superpassword!");
    await browser.pause(2000); //паузи, щоб ми бачили, так вони є у фреймворку

    await expect(LoginPage.username).toHaveValue("123hello");
    //перевіряємо, чи є в локаторі цей текст
    await browser.pause(2000);
    await LoginPage.clickOnLoginBtn();
  });
});


describe.skip("Webdriverio main page", () => {
  it("done", async () => {
    await browser.url(`https://dou.ua`);

    await GithubPage.clickOnBandBtn(); //сторінка та метод, який робить якусь дію знаходиться окремо
    await browser.pause(2000);

    await GithubPage.clickOnForumBtn();
    await browser.pause(2000);

    await GithubPage.clickOnGameDevBtn();
    await browser.pause(2000);

    //expect(GameDevPage.companyGameDevsRateLink).toBeClickable(); //не перевіряємо клік, тому що і так клікаємо далі

    await GameDevPage.clickOnTopGamesRateLink();
    //викликати саме функцію для кліку на сторінку з локатором

    expect(GameDevTopRatesPage.title).toHaveValue(
      "Матеріали на тему «ігри місяця»",
    );
  });
});