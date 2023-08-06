const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
const { BannerBtn } = require("../../pages/bannerButtons")

let header;
let page;
let bannerBtn;
const language = "Polski";
const country = "Poland";

test.describe("US_11-02-02_Education > Menu item [Share trading] on UnReg Role", () => {

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    header = new Header(page);
    // open capital.com
    await page.goto("/");
    //accept all Cookies
    await header.clickAcceptAllCookies();
    // select country and language
    await header.hoverCountryAndLang();
    await page.getByRole("textbox").first().click();
    await page.getByRole("link", { name: country }).click();
    await header.hoverCountryAndLang()
    await page.getByRole("link", { name: language }).click();
    await header.getEducationMenu.hover();
    await header.clickSharesTrading();

  });

  test(`TC_11.02.02_01_UnReg  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    const fs = require('fs');
    await page.waitForTimeout(20000);
    const links = await page.$$eval('a[data-type="sidebar_deeplink"]', (elements) => elements.map((el) => el.href));
    console.log("links", links);
    fs.writeFileSync('links.txt', links.join('\n'));
    const fileContent = fs.readFileSync('links.txt', 'utf-8');
    const linksFromFile = fileContent.split('\n').filter((link) => link !== '');
    const randomLinks = getRandomElements(linksFromFile, 4);
    await page.goto(linksFromFile[0]);
    await bannerBtn.clickStartTradingBtnOnMainBanner();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    const elementText = await page.$eval('#s_overlay', element => element.innerText);
    expect(elementText).toBeTruthy();
    await expect(page.locator('[class="signup-form"] .h1')).toBeVisible();
    await expect(page.locator('#s_overlay-email > .field__control')).toHaveAttribute("type", "email");
    await expect(page.locator('#s_overlay-pass > .field__control')).toHaveAttribute("type", "password");
    await expect(page.locator('.signup-form > .form-container-small-content > form > .btn')).toBeVisible();
    await expect(page.locator('a[href="/terms-and-policies"]')).toBeVisible();
    await page.locator('#s_overlay .form-container-white .button-cleared').click();
    if (page.url() === linksFromFile[0]) {
      console.log(`Testing on the '${linksFromFile[0]}' link was successfully completed `);
    } else {
      console.log(`Testing on the '${linksFromFile[0]}' link was failed`);
    }

    for (let i = 1; i < randomLinks.length; i++) {
      await page.goto(randomLinks[i]);
      await bannerBtn.clickStartTradingBtnOnMainBanner();
      await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
      const elementText = await page.$eval('#s_overlay', element => element.innerText);
      expect(elementText).toBeTruthy();
      await expect(page.locator('[class="signup-form"] .h1')).toBeVisible();
      await expect(page.locator('#s_overlay-email > .field__control')).toHaveAttribute("type", "email");
      await expect(page.locator('#s_overlay-pass > .field__control')).toHaveAttribute("type", "password");
      await expect(page.locator('.signup-form > .form-container-small-content > form > .btn')).toBeVisible();
      await expect(page.locator('a[href="/terms-and-policies"]')).toBeVisible();
      await page.locator('#s_overlay .form-container-white .button-cleared').click();

      if (randomLinks.includes(randomLinks[i])) {
        console.log(`Testing on the '${randomLinks[i]}' link was successfully completed `);
      } else {
        console.log(`Testing on the '${randomLinks[i]}' link was failed`);
      }

    }

    // Функция для получения случайных элементов из массива

    function getRandomElements(array, count) {
      const randomized = array.slice();
      for (let i = randomized.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
      }
      return randomized.slice(0, count);
    }

  });

})




























