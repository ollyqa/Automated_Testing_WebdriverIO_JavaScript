class GithubPage {
  get signUpBtn() {
    return $(".HeaderMenu-link--sign-up");
  }

  get pageTitle() {
    return $("#hero-section-brand-heading");
  }

  get viewAllSolutions() {
    return $('a[href="/solutions"]');
  }

  get footer() {
    return $("footer");
  }

  get footerSubscribeBtn() {
    return $('a[href="/newsletter"]');
  }

  get searchInput() {
    return $('button[data-target="qbsearch-input.inputButton"]');
  }

  get searchField() {
    return $("#query-builder-test");
  }

  get firstSearchResult() {
    return $(".search-match");
  }

  async clickOnSignUpBtn() {
    await this.signUpBtn.click();
  }

  async getPageTitleText(value) {
    await expect(this.pageTitle).toHaveText(value, { containing: true });
  }

  async scrollIntoViewAllSolutions() {
    await this.viewAllSolutions.scrollIntoView();
  }

  async getViewAllSolutionsText(value) {
    await expect(this.viewAllSolutions).toHaveText(value, { containing: true });
  }

  async clickOnViewAllSolutions() {
    await this.viewAllSolutions.click();
  }

  async scrollIntoViewFooter() {
    await this.footer.scrollIntoView();
  }
  async clickOnFooterSubscribeBtn() {
    await this.footerSubscribeBtn.click();
  }

  async clickOnSearchInput() {
    await this.searchInput.waitForClickable({ timeout: 5000 });
    await this.searchInput.click();
  }
  async setSearchField(value) {
    await this.searchField.waitForDisplayed({ timeout: 5000 });
    await this.searchField.setValue(value);
  }
  async getFirstSearchResultText(value) {
    await expect(this.firstSearchResult).toHaveText(value, {
      containing: true,
    });
  }
}

export default new GithubPage();
