const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
const { BannerBtn } = require("../../pages/bannerButtons")

let header;
let page;
let bannerBtn;
const language = "English";
const country = "United Kingdom";

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
    const links = await page.$$eval('a[data-type="sidebar_deeplink"]', (elements) => elements.map((el) => el.href));
    await fs.promises.writeFile('links.txt', links.join('\n'));
    const fileContent = await fs.promises.readFile('links.txt', 'utf-8');
    const linksFromFile = fileContent.split('\n').filter((link) => link !== '');
    const randomLinks = getRandomElements(linksFromFile, 3);
    await page.goto(linksFromFile[0]);
    await bannerBtn.clickStartTradingBtnOnMainBanner();
    for (let i = 1; i < randomLinks.length; i++) {
      await page.goto(randomLinks[i]);
      await bannerBtn.clickStartTradingBtnOnMainBanner();
      await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
      await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
      await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
      await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
      await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
      await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
      await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
      await page.getByRole("button", { name: "Cancel" }).click();
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
 




























