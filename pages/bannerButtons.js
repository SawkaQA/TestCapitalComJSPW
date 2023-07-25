const { test, expect } = require("@playwright/test");

class BannerBtn {
    constructor(page) {
        this.page = page;
        this.StartTradingBtnOnMainBanner = page.locator('.btn--darkText')
        this.TryDemoBtnOnMainBanner = page.locator('.btn--emptyblack')
        this.TradeBtnOnWidgetMostTraded = page.locator(`a[href="/trading/platform/spotlight/427748677997764?side=buy"]`)
        // Footer
        this.DownloadOnAppStoreBtn = page.locator('[data-type = "banner_capital_ios"]')
        this.DownloadOnGooglePlayLink = page.getByRole('[data-type = "banner_capital_google"]')
        this.ExploreWebPlatformLink = page.locator('signup-component.modal')
        this.CreateAndVerifyBtn = page.locator('.regSteps__shape > .js_signup')
    }

    // Methods

    async clickStartTradingBtnOnMainBanner() {
        await this.StartTradingBtnOnMainBanner.click()
    }

    async clickTryDemoBtnOnMainBanner() {
        await this.TryDemoBtnOnMainBanner.click()
    }

    async clickTradeBtnOnWidgetMostTraded() {
        if (!(await this.TradeBtnOnWidgetMostTraded)) {
            console.error(`For test on this country the button [Trade] on Widget "Most traded" doesn't displayed`);
            throw new Error;
        } else  {
            await this.TradeBtnOnWidgetMostTraded.click()
           
        }
    }

    async clickDownloadOnAppStoreBtn() {
        await this.DownloadOnAppStoreBtn.click();
    }

    async clickDownloadOnGooglePlayLink() {
        await this.DownloadOnGooglePlayLink.click();
    }

    async clickExploreWebPlatformLink() {
        await this.ExploreWebPlatformLink.click();
    }

    async clickCreateAndVerifyBtn() {
        await this.CreateAndVerifyBtn.click();
    }
}
module.exports = { BannerBtn };