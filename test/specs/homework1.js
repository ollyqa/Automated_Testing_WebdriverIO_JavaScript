import { browser, $, expect } from "@wdio/globals";

describe("Webdriverio main page", () => {
  it("API PAGE", async () => {
    // Step 1: Open the website
    console.log("👉 Navigation: Opening homepage");
    await browser.url(`https://webdriver.io/`);

    // Step 2: Click the API link
    console.log("👉 Action: Clicking API button");
    let apiButton = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]');
    await apiButton.click();

    // Step 3: Verify the URL changed
    console.log("👉 Assertion: Checking target URL");
    await expect(browser).toHaveUrl("https://webdriver.io/docs/api");

    // Step 4: Validate the main header text
    console.log("👉 Action & Assertion: Checking H1 header text");
    let title = await $("h1");
    console.log(`   [INFO] Found Header Text: "${await title.getText()}"`);
    await expect(title).toHaveText("Introduction");

    // Step 5: Extract and print href attribute from a link
    console.log("👉 Action: Extracting link from article paragraph");
    let element = await $(
      '//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/article/div[2]/p[1]/a[1]',
    );
    let link = await element.getAttribute("href");
    console.log(`   [INFO] Extracted Link URL: ${link}`);

    // Step 6: Open search modal
    console.log("👉 Action: Clicking search input placeholder");
    let searchButton = await $(".DocSearch-Button-Placeholder");
    await searchButton.click();

    // Step 7: Type search query
    console.log("👉 Action: Typing query into the active search input");
    let searchInput = await $(".DocSearch-Input");
    await searchInput.setValue("all is done");
    await browser.pause(2000);

    // Step 8: Clear the search field
    console.log("👉 Action: Clearing the search input field");
    await searchInput.clearValue();
    await browser.pause(2000);

    console.log("🏁 Test Finished Successfully!");
  });
});
