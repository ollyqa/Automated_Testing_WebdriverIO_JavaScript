/*import { browser, $, expect } from "@wdio/globals";

describe("Webdriverio main page", () => {
  it("should navigate to webdriver.io", async () => {
    await browser.url("https://webdriver.io");
    console.log("1. Зайшли на сайт");
    await browser.pause(2000);
  });

  it("should click on API link", async () => {
    await browser.url("https://webdriver.io");
    await $('nav a[href="/docs/api"]').click();
    console.log("2. Клікнули на API");
    await browser.pause(2000);
  });

  it("should check URL", async () => {
    await browser.url("https://webdriver.io/docs/api");
    await expect(browser).toHaveUrl("https://webdriver.io/docs/api/");
    console.log("3. URL: " + (await browser.getUrl()));
    await browser.pause(2000);
  });

  it("should check title", async () => {
    await browser.url("https://webdriver.io/docs/api");
    await expect(browser).toHaveTitle("Introduction | WebdriverIO");
    console.log("4. Title: " + (await browser.getTitle()));
    await browser.pause(2000);
  });

  it("should check Webdriver link attribute", async () => {
    await browser.url("https://webdriver.io/docs/api");
    await expect($('a[href="/docs/api/webdriver"]')).toHaveAttribute(
      "href",
      "/docs/api/webdriver",
    );
    console.log(
      "5. href: " +
        (await $('a[href="/docs/api/webdriver"]').getAttribute("href")),
    );
    await browser.pause(2000);
  });

  it("should click on search", async () => {
    await browser.url("https://webdriver.io/docs/api");
    await $(".DocSearch-Button-Container").click();
    console.log("6. Клікнули на search");
    await browser.pause(2000);
  });

  it("should enter text in search", async () => {
    await browser.url("https://webdriver.io/docs/api");
    await $(".DocSearch-Button-Container").click();
    await browser.pause(1000);
    const searchInput = await $(".DocSearch-Input");
    await searchInput.addValue("All is done!");
    console.log("7. Ввели текст: " + (await searchInput.getValue()));
    await browser.pause(2000);
  });

  it("should clear search input", async () => {
    await browser.url("https://webdriver.io/docs/api");
    await $(".DocSearch-Button-Container").click();
    await browser.pause(1000);
    const searchInput = await $(".DocSearch-Input");
    await searchInput.addValue("All is done!");
    await browser.pause(1000);
    await searchInput.clearValue();
    console.log("8. Текст видалено: " + (await searchInput.getValue()));
    await browser.pause(2000);
  });
});
*/