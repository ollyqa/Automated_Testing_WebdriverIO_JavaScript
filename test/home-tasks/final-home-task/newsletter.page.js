class NewsletterPage {
  get newsletterTitle() {
    return $("h1=Get our developer newsletter");
  }

  get workEmail() {
    return $("#form-field-emailAddress");
  }

  get countryDropdownBtn() {
    return $("#form-field-country");
  }

  get ukraineOption() {
    return $("option=Ukraine");
  }

  get githubCheckbox() {
    return $(".Primer_Brand__Checkbox-module__Checkbox___T8FJa");
  }

  get subscribeBtn() {
    return $("button=Subscribe");
  }

  async getNewsletterTitle(value) {
    await expect(this.newsletterTitle).toHaveText(value, { containing: true });
  }

  async setEmail(value) {
    await this.workEmail.addValue(value);
  }

  async selectUkraine() {
    await this.countryDropdownBtn.click();
    await this.ukraineOption.click();
  }

  async clickgithubCheckbox() {
    await this.githubCheckbox.click();
  }

  async clickOnCreateAccountBtn() {
    await this.subscribeBtn.click();
  }
}

export default new NewsletterPage();
