// const { expect } = require("@playwright/test");

exports.Header = class Header {
    constructor(page) {
        this.page = page;
        this.getMainLogo = page.locator('[class="cc-logo hideXs"]')
        this.getEducationMenu = page.locator('a[data-type="nav_id96"]')
        this.PositionTrading = page.locator('a[data-type="nav_id528"]')
        this.SharesTrading = page.locator('a[data-type="nav_id106"]')
        this.CountryAndLang = page.locator('div .licLangSw__btn')
        this.DropdownCountry = page.getByRole("textbox")
        this.AcceptAllCookies = page.locator('#onetrust-accept-btn-handler')
        // Countries
        this.GermanyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_germany"]')
        this.TurkeyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_turkey"]')
        this.Australia = page.locator('li.js-analyticsClick[data-type="nav_country_australia"]')
        this.UnitedKingdomCountry = page.getByRole("link", { name: "United Kingdom" })
        this.SpainCountry = page.locator('li.js-analyticsClick[data-type="nav_country_spain"]')
        this.ArabicCountry = page.locator('li.js-analyticsClick[data-type="nav_country_united_arab_emirates"]')
        this.FranceCountry = page.locator('li.js-analyticsClick[data-type="nav_country_france"]')
        this.GermanyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_germany"]')
        this.GreeceCountry = page.locator('li.js-analyticsClick[data-type="nav_country_greece"]')
        this.PolandCountry = page.locator('li.js-analyticsClick[data-type="nav_country_poland"]')

    }

    // Methods
    async clickMainLogo(){
        await this.getMainLogo.click();
    }

    async clickEducationMenu() {
        await this.getEducationMenu.click();
    }

    async hoverEducationMenu() {
        await this.getEducationMenu.hover();
    }

    async clickAcceptAllCookies() {
        await this.AcceptAllCookies.click();
    }

    async clickPositionTrading() {
        await this.PositionTrading.click();
    }

    async clickSharesTrading() {
        await this.SharesTrading.click();
    }

    async clickDropdownCountry() {
        await this.DropdownCountry.first().click();
    }

    async hoverCountryAndLang() {
        await this.CountryAndLang.hover();
    }

    async clickUnitedKigdomCoutry() {
        await this.UnitedKingdomCountry.click();
    }

}