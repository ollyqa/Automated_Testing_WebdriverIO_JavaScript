class ViewAllSolutions {
  get pageTitle() {
    return $("#hero-section-brand-heading"); // або знайдіть правильний селектор на /solutions
  }

  get startFreeTrialBtn() {
    return $("a=Start a free trial");
  }

  // ✅ Додали параметр value
  async getPageTitleText(value) {
    await expect(this.pageTitle).toHaveText(value, { containing: true });
  }

  async сlickOnStartFreeTrialBtn() {
    await this.startFreeTrialBtn.click();
  }
}

export default new ViewAllSolutions();
