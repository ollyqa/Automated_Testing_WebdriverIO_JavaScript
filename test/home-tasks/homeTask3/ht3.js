import { browser, expect } from "@wdio/globals";
import "dotenv/config";

describe("GitHub main page", () => {
  // ☑️ TC-1: SignUp for GitHub
  it("should navigate to SignUp page after clicking Sign up button", async () => {
    // Go to https://github.com
    await browser.url("https://github.com");

    // Enter email in input field
    const inputField = await $("#hero_user_email");
    await inputField.addValue("morholha@gmail.com");

    // Click "Sign up for GitHub" button
    const signUpButton = await $('//button[contains(., "Sign up for GitHub")]');
    await signUpButton.click();
    await browser.pause(1000);

    // Expected result: User is on the "Sign up for GitHub" page
    await expect(browser).toHaveTitle("Sign up for GitHub · GitHub");
  });

  // ☑️ TC-2: Check search for GitHub
  it("should display search results and show entered text in URL", async () => {
    // Go to https://github.com
    await browser.url("https://github.com");

    // Click on search field
    const searchField = await $(".search-input-container");
    await searchField.click();

    // Enter test data in search field
    const searchInput = await $("#query-builder-test");
    await searchInput.addValue("car");

    // Click Enter on the keyboard
    await browser.keys("Enter");
    await browser.pause(1000);

    // Expected result: entered text exists in URL
    const url = await browser.getUrl();
    await expect(url).toContain("car");

    // Expected result: page with entered text repositories is displayed
    const body = await $("body");
    const bodyText = await body.getText();
    await expect(bodyText).toContain("car");
  });

  // ☑️ TC-3: SignIn with invalid data
  it("should Sign In with invalid data", async () => {
    // Go to https://github.com
    await browser.url("https://github.com");

    // Click "Sign in" button
    const signInButton = await $("=Sign in");
    await signInButton.click();
    await browser.pause(1000);

    // Enter valid username
    const userName = await $("#login_field");
    await userName.addValue("morholha@gmail.com");

    // Enter invalid password
    const password = await $("#password");
    await password.addValue("12345");

    // Click Sign in button
    const submitButton = await $('[type="submit"]');
    await submitButton.click();
    await browser.pause(1000);

    // Expected result: error message "Incorrect username or password." is displayed
    const errorMessage = await $(".flash-error");
    await expect(errorMessage).toHaveText(
      expect.stringContaining("Incorrect username or password."),
    );
  });

  // ☑️ TC-4: Sign out from all accounts
  it("should Sign out from all accounts", async () => {
    // 💎 Precondition: User is logged in
    // Go to https://github.com/login
    await browser.url("https://github.com/login");

    // Enter username
    const userName = await $("#login_field");
    await userName.addValue(process.env.GITHUB_EMAIL);

    // Enter password
    const password = await $("#password");
    await password.addValue(process.env.GITHUB_PASSWORD);

    // Click Sign in button
    const submitButton = await $('[type="submit"]');
    await submitButton.click();
    await browser.pause(2000);

    // Click on the avatar in the right corner
    const avatar = await $('[data-testid="github-avatar"]');
    await avatar.waitForDisplayed({ timeout: 10000 });
    await avatar.click();

    // Click Sign out button
    const signOut = await $('a[href="/logout"]');
    await signOut.waitForDisplayed({ timeout: 5000 });
    await signOut.click();
    await browser.pause(1000);

    // Click Sign out from all accounts button
    const signOutButton = await $('[value="Sign out from all accounts"]');
    await signOutButton.waitForDisplayed({ timeout: 5000 });
    await signOutButton.click();
    await browser.pause(3000);

    // Expected result: User is on the main GitHub page with h1 "The future of building happens together"
    const heading = await $("h1=The future of building happens together");
    await heading.waitForDisplayed({ timeout: 10000 });
    await expect(heading).toHaveText(
      expect.stringContaining("The future of building happens together"),
    );
  });

  // ☑️ TC-5: Click the Developer API link
  it("should click the Developer API link", async () => {
    // Go to https://github.com
    await browser.url("https://github.com");

    // Find Developer API link
    const apiLink = await $(
      'a[href="https://docs.github.com/get-started/exploring-integrations/about-building-integrations"]',
    );

    // Scroll down the page to the Developer API link

    // Click the "Developer API" link
    await apiLink.click();
    await browser.pause(1000);

    // Expected result: User is on the page with h1 "About building integrations"
    const heading = await $("h1");
    await expect(heading).toHaveText(
      expect.stringContaining("About building integrations"),
    );
  });
});
