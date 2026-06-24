class SignUpPage {
  get emailInput() {
    return $("#email");
  }
  get passwordInput() {
    return $("#password");
  }
  get loginInput() {
    return $("#login");
  }

  get countryDropdownBtn() {
    return $("#country-dropdown-panel-button");
  }

  get ukraineOption() {
    return $("span=Ukraine");
  }

  get githubCopilotCheckbox() {
    return $("#user_signup\\[copilot_opt_in\\]");
  }
  get createAccountBtn() {
    return $('[data-target="signup-form.SignupButton"]');
  }

  get pageTitle() {
    return $("h1.signups-rebrand__container-h1");
  }

  async setEmail(value) {
    await this.emailInput.addValue(value);
  }
  async setPassword(value) {
    await this.passwordInput.addValue(value);
  }

  async setLogin(value) {
    await this.loginInput.addValue(value);
  }

  async selectUkraine() {
    await this.countryDropdownBtn.click();
    await this.ukraineOption.click();
  }
  async clickGithubCopilotCheckbox() {
    await this.githubCopilotCheckbox.click();
  }

  async clickOnCreateAccountBtn() {
    await this.createAccountBtn.click();
  }

  async pageTitleText(value) {
    await expect(this.pageTitle).toHaveText(value, { containing: true });
  }
}

export default new SignUpPage();
