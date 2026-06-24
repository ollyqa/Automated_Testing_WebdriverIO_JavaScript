class TrialPlanPage {
  get pageTitle() {
    return $('//h1[text()="Pick your trial plan"]');
  }

  get enterpriseCloudBtn() {
    return $('//h2[text()="Enterprise Cloud"]');
  }

  async getPageTitleText(value) {
    await expect(this.pageTitle).toHaveText(value, { containing: true });
  }

  async clickOnEnterpriseCloudBtn() {
    await this.enterpriseCloudBtn.click();
  }
}

export default new TrialPlanPage();
