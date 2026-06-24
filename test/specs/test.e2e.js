import LoginPage from "./../pages/main.page.js";
import MainPage from "../pages/dou.main.page.js";
import GameDevPage from "./../pages/gamedev.page.js";
import GameDevTopRatesPage from "./../pages/gamedevToprates.page.js";

import SalariesPage from "./../home-tasks/homeTask4/salaries.page.js";
import JobPage from "./../home-tasks/homeTask4/job.page.js";
import DefTechPage from "./../home-tasks/homeTask4/defTech.page.js";

import GithubPage from "./../home-tasks/final-home-task/github.page.js";
import SignUpPage from "./../home-tasks/final-home-task/signUp.page.js";
import ViewAllSolutions from "../home-tasks/final-home-task/viewAllSolutions.page.js";
import TrialPlanPage from "./../home-tasks/final-home-task/trialPlan.page.js";
import EnterpriseCloudPage from "./../home-tasks/final-home-task/enterpriseCloud.page.js";
import NewsletterPage from "./../home-tasks/final-home-task/newsletter.page.js";
import NewsletterConfirmationPage from "./../home-tasks/final-home-task/newsletterConfirmation.page.js";

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

    await MainPage.clickOnBandBtn(); //сторінка та метод, який робить якусь дію знаходиться окремо
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

describe.skip("Webdriverio main page", () => {
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

describe("Webdriverio main page", () => {
  it("☑️ TC №1:  Sign up to GitHub", async () => {
    await browser.url(`https://github.com`);

    // Click on Sign Up button
    await GithubPage.clickOnSignUpBtn();
    await browser.pause(2000);

    // Enter email
    await SignUpPage.setEmail("olhatest@gmail.com");
    await browser.pause(2000);
    await expect(SignUpPage.emailInput).toHaveValue("olhatest@gmail.com");

    // Enter password
    await SignUpPage.setPassword("olha123olha123");
    await browser.pause(2000);
    await expect(SignUpPage.passwordInput).toHaveValue("olha123olha123");

    // Enter username
    await SignUpPage.setLogin("olhatest");
    await browser.pause(2000);
    await expect(SignUpPage.loginInput).toHaveValue("olhatest");

    // Select Ukraine as country
    await SignUpPage.selectUkraine();
    await browser.pause(2000);

    // Check GitHub Copilot checkbox
    await SignUpPage.clickGithubCopilotCheckbox();
    await browser.pause(2000);

    // Click Create account button
    await SignUpPage.clickOnCreateAccountBtn();
    await browser.pause(2000);

    // Verify confirmation page title is displayed
    await SignUpPage.pageTitleText("Create your free account");
  });
});

describe("Webdriverio main page", () => {
  it("☑️ TC №2: Check all GitHub solutions", async () => {
    await browser.url(`https://github.com`);

    // Verify main page title is displayed
    await expect(GithubPage.pageTitle).toHaveText(
      "The future of building happens together",
      { containing: true },
    );

    // Scroll to View all solutions button
    await GithubPage.scrollIntoViewAllSolutions();
    await browser.pause(2000);

    // Verify View all solutions button text
    await GithubPage.getViewAllSolutionsText("View all solutions");

    // Click View all solutions and navigate to solutions
    await GithubPage.clickOnViewAllSolutions();
    await browser.pause(2000);

    // Verify solutions page title is displayed
    await ViewAllSolutions.getPageTitleText(
      `AI-powered platform solutions to solve your company’s challenges`,
    );
    await browser.pause(2000);

    // Click Start a free trial button
    await ViewAllSolutions.сlickOnStartFreeTrialBtn();
    await browser.pause(2000);
    // Verify trial plan page title is displayed
    await TrialPlanPage.getPageTitleText("Pick your trial plan");

    // Click Enterprise Cloud button
    await TrialPlanPage.clickOnEnterpriseCloudBtn();
    await browser.pause(2000);
    // Verify Enterprise Cloud page title is displayed
    await EnterpriseCloudPage.getTitleText("Create your free account");
  });
});

describe("Webdriverio main page", () => {
  it("☑️ TC №3: Check all GitHub solutions", async () => {
    await browser.url(`https://github.com`);

    // Verify main page title is displayed
    await expect(GithubPage.pageTitle).toHaveText(
      "The future of building happens together",
      { containing: true },
    );

    // Scroll to View all solutions button
    await GithubPage.scrollIntoViewAllSolutions();
    await browser.pause(2000);

    // Verify View all solutions button text
    await GithubPage.getViewAllSolutionsText("View all solutions");

    // Click View all solutions and navigate to solutions
    await GithubPage.clickOnViewAllSolutions();
    await browser.pause(2000);

    // Verify solutions page title is displayed
    await ViewAllSolutions.getPageTitleText(
      `AI-powered platform solutions to solve your company’s challenges`,
    );
    await browser.pause(2000);

    // Click Start a free trial button
    await ViewAllSolutions.сlickOnStartFreeTrialBtn();
    await browser.pause(2000);
    // Verify trial plan page title is displayed
    await TrialPlanPage.getPageTitleText("Pick your trial plan");

    // Click Enterprise Cloud button
    await TrialPlanPage.clickOnEnterpriseCloudBtn();
    await browser.pause(2000);
    // Verify Enterprise Cloud page title is displayed
    await EnterpriseCloudPage.getTitleText("Create your free account");
  });
});

describe("Webdriverio main page", () => {
  it("☑️ TC №4: Subscribe for newsletter in GitHub", async () => {
    await browser.url(`https://github.com`);

    // Verify main page title is displayed
    await expect(GithubPage.pageTitle).toHaveText(
      "The future of building happens together",
      { containing: true },
    );

    // Click Subscribe button in footer
    await GithubPage.clickOnFooterSubscribeBtn();
    await browser.pause(2000);

    // Verify newsletter page title is displayed
    await expect(NewsletterPage.newsletterTitle).toHaveText(
      "Get our developer newsletter",
      { containing: true },
    );
    await browser.pause(2000);

    // Enter email
    await NewsletterPage.setEmail("olhatest@gmail.com");
    await browser.pause(2000);
    await expect(NewsletterPage.workEmail).toHaveValue("olhatest@gmail.com");

    // Select Ukraine as country
    await NewsletterPage.selectUkraine();
    await browser.pause(2000);

    // Select GitHub checkbox
    await NewsletterPage.clickgithubCheckbox();
    await browser.pause(2000);

    // Click Subscribe button
    await NewsletterPage.clickOnCreateAccountBtn();
    await browser.pause(2000);

    // Verify confirmation message is displayed
    await NewsletterConfirmationPage.getNewsletterTitle(
      "Thanks for subscribing",
    );
  });
});

describe("Webdriverio main page", () => {
  it("☑️ TC №5: Check input search in GitHub", async () => {
    await browser.url(`https://github.com`);

    // Verify main page title is displayed
    await expect(GithubPage.pageTitle).toHaveText(
      "The future of building happens together",
      { containing: true },
    );

    // 1. Клікаємо по заглушці пошуку
    await GithubPage.clickOnSearchInput();

    // 2. Вводимо "cat"
    await GithubPage.setSearchField("cat");

    // ОПЦІОНАЛЬНО: Якщо вам ДУЖЕ потрібна ця перевірка, додайте паузу перед нею,
    // щоб скрипти GitHub встигли оновити поле:
    await browser.pause(500);
    await expect(GithubPage.searchField).toHaveValue("cat");

    // 3. Тиснемо Enter для старту пошуку
    await browser.keys("Enter");

    // 4. Перевіряємо, що URL змінився і містить "cat"
    // Додаємо очікування, бо перехід на іншу сторінку займає час
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes("cat"),
      { timeout: 5000, timeoutMsg: "URL did not change to search results" },
    );

    // 5. Перевірка тексту в результатах
    await GithubPage.getFirstSearchResultText("cat");
  });
});
