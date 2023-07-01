const { test, expect } = require("@playwright/test");
const { Header } = require('../pages/header')
import headerData from '../fixtures/headerData.json'


test.describe('US_11.03.05 | Educations > Menu item [Swing Trading]', () => {
    test.beforeEach(async ({ page }) => {
        // open capital.com
        await page.goto('/')
        // select language
        await page.locator('div .licLangSw__btn').hover();
        await page.locator("[href='https://capital.com/']", {hasText: 'English'}).click()
    });

    test('Chech route on Education Menu', async ( { page }) => {
        const header = new Header(page);
        await header.clickEducationMenu();
        await expect(page).toHaveURL(headerData.endPointsMenuItems[0]);
    })

    test('Ckick on Swing Trading', async ({ page }) => {
        await test.step('Hover on Education menu', async () => {
            const header = new Header(page);
            await header.getEducationMenu.hover();
            await page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/swing-trading"]').click();
            await expect(page).toHaveTitle('Swing Trading Strategy: Learn How to Swing Trade | Capital.com')
        })
    })
});

