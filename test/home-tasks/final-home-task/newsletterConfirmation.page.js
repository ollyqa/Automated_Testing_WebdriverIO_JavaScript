class NewsletterConfirmationPage {
  get newsletterTitle() {
    return $("#hero-section-brand-heading");
  }

  async getNewsletterTitle(value) {
    await expect(this.newsletterTitle).toHaveText(value, { containing: true });
  }
}
export default new NewsletterConfirmationPage();
