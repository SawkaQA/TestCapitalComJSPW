const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
// import headerData from "../../fixtures/headerData.json";

test.describe("US_11.03.05 | Educations > Menu item [Swing Trading]", () => {
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
        // open capital.com
        await page.goto("/");
        await page.locator("div .licLangSw__btn").hover();
    });

    languages.forEach((language) => {
        test(`Chech route on Education Menu on ${language.langName}`, async ({
            page,
        }) => {
            const header = new Header(page);
            await page.locator(language.langUrl).click();
            const lang = page.getByRole('link', { name: 'English' })
            const title = page.locator('h1[class="hero"]');
            await header.clickEducationMenu();
        });

        test(`Click on Swing Trading ddsds on ${language.langName}`, async ({ page }) => {
            await test.step("Hover on Education menu and select language", async () => {
                const header = new Header(page);
                await page.locator(language.langUrl).click();
                const lang = page.getByRole('link', { name: 'العَرَبِيَّة' })
                await header.getEducationMenu.hover();
                const isVisibleSwing = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/swing-trading"]');

                if (await isVisibleSwing.isVisible()) {
                    await isVisibleSwing.click();
                }
            });
        });
    });
});
