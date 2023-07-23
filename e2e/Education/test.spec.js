const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
const { LoginPage } = require("../../pages/login");

test.describe("US_11.03.05 | Educations > Menu item [Swing Trading]", () => {

    let header;
    let login;
    const languages = [
        {
            langName: "English",
            langUrl: "a.js-analyticsClick[data-type='nav_lang_en']",
        },
        {
            langName: "العَرَبِيَّة",
            langUrl: "a.js-analyticsClick[data-type='nav_lang_ar']",
        },
    ];

    test.beforeEach(async ({ page }) => {
        header = new Header(page);
        login = new LoginPage(page);
        await login.visit();
        await page.locator("div .licLangSw__btn").hover();
    });

    languages.forEach((language) => {
        test(`Check route on Education Menu on ${language.langName}`, async ({ page }) => {
            await page.locator(language.langUrl).click();
            await header.clickEducationMenu();
        });

        test(`Click on Swing Trading ddsds on ${language.langName}`, async ({ page }) => {
            await test.step("Hover on Education menu and select language", async () => {
                await page.locator(language.langUrl).click();
                await header.getEducationMenu.hover();
                const isVisibleSwing = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/swing-trading"]');

                if (await isVisibleSwing.isVisible()) {
                    await isVisibleSwing.click();
                } else {
                    await test.step("Check visible links on page for languages", async () => {
                        console.log(
                            `For test language the page "Education->Swing Trading" doesn't exist on production`
                        );
                        test.skip();
                    });
                }
            });
        });

        test(`Verify Login Form on Main page on ${language.langName}`, async ({ page }) => {
            login = new LoginPage(page);
            await page.locator(language.langUrl).click();
            await login.clickBtnLogIn()
            await expect(page.locator("#l_overlay > .form-container-white")).toBeVisible();
        })
    })
})
