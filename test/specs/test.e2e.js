import LoginPage from "./../pages/main.page.js";
import MainPage from "../pages/dou.main.page.js";
import GameDevPage from "./../pages/gamedev.page.js";
import GameDevTopRatesPage from "./../pages/gamedevToprates.page.js";

import SalariesPage from "./../Home tasks/home task 4/salaries.page.js";
import JobPage from "./../Home tasks/home task 4/job.page.js";
import DefTechPage from "./../Home tasks/home task 4/defTech.page.js";

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

    await MainPage.clickOnBandBtn();
    await browser.pause(2000);

    await MainPage.clickOnForumBtn();
    await browser.pause(2000);

    await MainPage.clickOnGameDevBtn();
    await browser.pause(2000);

    //expect(GameDevPage.companyGameDevsRateLink).toBeClickable(); //не перевіряємо клік, тому що і так клікаємо далі

    await GameDevPage.clickOnTopGamesRateLink();
    //викликати саме функцію для кліку на сторінку з локатором

    expect(GameDevTopRatesPage.title).toHaveValue(
      "Матеріали на тему «ігри місяця»",
    );
  });
});

describe("Webdriverio main page", () => {
  it("home task 4", async () => {
    await browser.url(`https://dou.ua`);

    await MainPage.clickOnSalariesBtn();
    await browser.pause(2000);

    expect(SalariesPage.season).toHaveValue("I Квартиль");

    await MainPage.clickOnJobBtn();
    await browser.pause(2000);

    await JobPage.clickOnSearchBtn();
    await browser.pause(2000);

    await JobPage.quickNavigationText("Швидкий перехід:");

    await browser.pause(2000);
    await MainPage.clickOnDefTechBtn();
    await browser.pause(2000);

    expect(DefTechPage.newsTitleText).toHaveValue("Новини");
    expect(DefTechPage.blogTitleText).toHaveValue("Блоги");
    expect(DefTechPage.forumPopularTitleText).toHaveValue(
      "Популярне на форумі",
    );
  });
});
