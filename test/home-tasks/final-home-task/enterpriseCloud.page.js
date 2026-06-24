class EnterpriseCloudPage {
  get pageTitle() {
    return $('//h1[text()="Create your free account"]');
  }


  async getTitleText(value) {
    await expect(this.pageTitle).toHaveText(value, { containing: true });
  }
}

export default new EnterpriseCloudPage();
