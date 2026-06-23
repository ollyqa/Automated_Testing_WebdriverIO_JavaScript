class GameDevPage {
  get companyGameDevsRateLink() {
    return $('//*[text()="Топ-25 компаній"]');
  }
  get topGamesRateLink() {
    return $('//*[text()="Ігри місяця"]');
  }
  async clickOnTopGamesRateLink() {
    await this.topGamesRateLink.click();
  }
}

export default new GameDevPage();
