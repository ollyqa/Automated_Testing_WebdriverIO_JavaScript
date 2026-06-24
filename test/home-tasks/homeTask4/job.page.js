class JobPage {
  get searchBtn() {
    return $('[type="submit"');
  }
  get quickNavigation() {
    return $(".example");
  }
  async clickOnSearchBtn() {
    await this.searchBtn.click();
  }
  async quickNavigationText(value) {
    await expect(this.quickNavigation).toHaveText(value, { containing: true });
  }
}

export default new JobPage();
