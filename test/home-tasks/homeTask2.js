import { browser, expect } from "@wdio/globals";

describe.skip("Webdriverio main page", () => {
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

  it("should scroll to Blog in footer", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const blogLink = await $('a.footer__link-item[href="/blog"]');
    await blogLink.scrollIntoView();
    console.log("3. Проскролили до Blog у футері");
    await browser.pause(2000);
  });

  it("should check Blog isDisplayed", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const blogLink = await $('a.footer__link-item[href="/blog"]');
    await blogLink.scrollIntoView();
    let displayed = await blogLink.isDisplayed();
    console.log("4. Blog is displayed: " + displayed);
    await browser.pause(2000);
  });

  it("should check Protocol Commands isDisplayed", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const protocolLink = await $('a[href="/docs/api/webdriver"]');
    await browser.execute(
      (el) => el.scrollIntoView({ block: "center" }),
      protocolLink,
    );
    let visible = await protocolLink.isDisplayed();
    console.log("5. Protocol Commands is visible: " + visible);
    await browser.pause(2000);
  });

  it("should check Protocol Commands isClickable", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const protocolLink = await $('a[href="/docs/api/webdriver"]');
    await browser.execute(
      (el) => el.scrollIntoView({ block: "center" }),
      protocolLink,
    );
    let clickable = await protocolLink.isClickable();
    console.log("6. Protocol Commands is clickable: " + clickable);
    await browser.pause(2000);
  });

  it("should get HTML of Protocol Commands", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const protocolLink = await $('a[href="/docs/api/webdriver"]');
    const innerHTML = await protocolLink.getHTML(false);
    console.log("7. innerHTML: " + innerHTML);

    const outerHTML = await $('a[href="/docs/api/webdriver"]').getHTML();
    console.log("7. outerHTML: " + outerHTML);

    await browser.pause(2000);
  });

  it("should click on Protocol Commands", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const protocolLink = await $('a[href="/docs/api/webdriver"]');
    await browser.execute(
      (el) => el.scrollIntoView({ block: "center" }),
      protocolLink,
    );
    await browser.execute((el) => el.click(), protocolLink);
    console.log("8. Клікнули на Protocol Commands");
    await browser.pause(2000);
  });

  it("should wait for h1 title on Protocol Commands page", async () => {
    await browser.url("https://webdriver.io/docs/api");
    const protocolLink = await $('a[href="/docs/api/webdriver"]');
    await browser.execute(
      (el) => el.scrollIntoView({ block: "center" }),
      protocolLink,
    );
    await browser.execute((el) => el.click(), protocolLink);
    await browser.pause(3000);

    await browser.waitUntil(
      async () => {
        return $("h1").isExisting();
      },
      { timeout: 15000, timeoutMsg: "H1 Title is not displayed" },
    );
    const h1Text = await $("h1").getText();
    console.log("9. Заголовок: " + h1Text);
    await browser.pause(2000);
  });
});
