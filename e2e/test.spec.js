const { test, expect } = require("@playwright/test");
const { Header } = require('../pages/header')
import headerData from '../fixtures/headerData.json'


test.describe('US_11.03.05 | Educations > Menu item [Swing Trading]', () => {
    test.beforeEach(async ({ page }) => {
        // open capital.com
        await page.goto('/')
        // select language
        await page.locator('div .licLangSw__btn').hover();
        const isVisibleEnglish = page.locator("[href='https://capital.com/de']", {hasText: 'Deutsch'});
        if(await isVisibleEnglish.isVisible()) {
            await isVisibleEnglish.click()
        }
    });

    test('Chech route on Education Menu', async ( { page }) => {
        const header = new Header(page);
        const title = page.locator('h1[class="hero"]')
        await header.clickEducationMenu();
        await expect(title).toContainText('Bildungshub')
    })

    test.only('Ckick on Swing Trading', async ({ page }) => {
        await test.step('Hover on Education menu', async () => {
            const header = new Header(page);
            await header.getEducationMenu.hover();
            const isVisibleSwing = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/swing-trading"]')

            if(await isVisibleSwing.isVisible()){
                await isVisibleSwing.click()
            }
            await expect(page).toHaveTitle('Online-Trading mit Smart Investment App | Capital.com')
        })
    })
});

