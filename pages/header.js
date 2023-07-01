const { expect } = require("@playwright/test");

exports.Header = class Header {
    constructor(page) {
        this.page = page;
        this.getMainLogo = page.locator('[class="cc-logo hideXs"]')
        this.getEducationMenu = page.locator(':nth-child(1) > .cc-nav__link--lvl1')
    }

    // Methods
    async clickMainLogo(){
        await this.getMainLogo.click();
    }

    async clickEducationMenu() {
        await this.getEducationMenu.click();
    }
}