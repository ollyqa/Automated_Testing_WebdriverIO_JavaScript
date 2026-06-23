class MainPage {
  get forumBtn() {
    return $('a[href="https://dou.ua/forums/"]');
  }
  get bandBtn() {
    return $('a[href="https://dou.ua/lenta/"]');
  }
  get salariesBtn() {
    return $('a[href="https://jobs.dou.ua/salaries/"]');
  }
  get jobBtn() {
    return $('a[href="https://jobs.dou.ua/"]');
  }
  get searchInput() {
    return $("#txtGlobalSearch");
  }
  get gameDevBtn() {
    return $(".menu-site__gamedev");
  }
  get relocateBtn() {
    return $(".menu-site__relocate");
  }

  get defTechBtn(){
    return $('a[href="https://deftech.dou.ua/?from=button"]');
  }
  async clickOnForumBtn() {
    await this.forumBtn.click();
  }
  async clickOnBandBtn() {
    await this.bandBtn.click();
  }
  async clickOnGameDevBtn() {
    await this.gameDevBtn.click();
  }
  async clickOnSalariesBtn() {
    await this.salariesBtn.click();
  }
  async clickOnJobBtn() {
    await this.jobBtn.click();
  }
  async clickOnDefTechBtn() {
    await this.defTechBtn.click();
  }
  async setSearchInput(value) {
    await this.searchInput.addValue(value);
  }
}

export default new MainPage();
