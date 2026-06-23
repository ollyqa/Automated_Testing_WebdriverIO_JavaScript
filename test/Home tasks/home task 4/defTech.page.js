class DefTechPage {
  get newsTitle() {
    return $('a[href="https://deftech.dou.ua/news/"]');
  }
  get blogTitle() {
    return $('a[href="https://deftech.dou.ua/blogs/?from=fpcol"]');
  }
  get forumPopularTitle() {
    return $(
      'a[href="https://dou.ua/forums/tags/Defence%20tech/?from=fptopics"]',
    );
  }
  async newsTitleText(value) {
    await expect(this.newsTitle).toHaveValue(value);
  }
  async blogTitleText(value) {
    await expect(this.blogTitle).toHaveValue(value);
  }
  async forumPopularTitleText(value) {
    await expect(this.forumPopularTitle).toHaveValue(value);
  }
}

export default new DefTechPage();