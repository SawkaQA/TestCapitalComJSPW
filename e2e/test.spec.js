const { test, expect } = require("@playwright/test");
const { Header } = require('../pages/header')
import headerData from '../fixtures/headerData.json'


test.describe('US_11.03.05 | Educations > Menu item [Swing Trading]', () => {
    test.beforeEach(async ({ page }) => {
        
        // open capital.com
        await page.goto('/')
        // header.clickEducationMenu();
        // basePage.clickSwingTradingOnEducationMenu();
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

