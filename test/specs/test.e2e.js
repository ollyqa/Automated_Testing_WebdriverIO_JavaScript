import { browser, expect } from "@wdio/globals";

describe("Webdriverio main page", () => {
  xit("should have correct title", async () => {
    await browser.url(`https://webdriver.io/`);

    const title = await browser.getTitle();
    console.log(title);

    await expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO",
    );
  });

  xit("should show addValue command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let input = await $("#username");
    await input.addValue("hello");
    await browser.pause(2000);

    await input.addValue("123");
    await browser.pause(2000);

    await expect(input).toHaveValue("hello123");
  });

  xit("should show setValue command", async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    let input = await $("#username");
    await input.setValue("world");
    await browser.pause(2000);

    console.log(await input.getValue());
    await expect(input).toHaveValue("world");
  });

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

  it("should show getAttribute command", async () => {
    await browser.url(`https://dou.ua/search`);

    let inputSearch = await $("#gsc-i-id1");
    let attr = await inputSearch.getAttribute("aria-label");
    console.log("Placeholder attribute is: " + attr);

    await inputSearch.setValue("Cat");
    attr = await inputSearch.getValue("Cat");
    await browser.pause(2000);
    console.log("Value attribute is: " + attr);
  });
});
