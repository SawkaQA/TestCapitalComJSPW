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
    const links = await page.$$eval('[data-type="sidebar_deeplink"]', (elements) => elements.map((el) => el.href));
    const randomLinks = getRandomElements(links, 3);
    // Вставить первую ссылку на первую позицию
    randomLinks.unshift(links[0]);
    for (const link of randomLinks) {
      await page.goto(link);

      // Здесь можно вставить ваш код с прогонкой 10 тестов на текущей странице
      for (let i = 0; i < 10; i++) {
        await bannerBtn.clickStartTradingBtnOnMainBanner();
        await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
        await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
        await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
        await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
        await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
        await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
        await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
        await page.getByRole("button", { name: "Cancel" }).click();
        await page.close();
        console.log(`Тест ${i + 1} на странице ${link}`);
      }
    }
  });
  // Функция для получения случайных элементов из массива
  function getRandomElements(array, numberOfElements) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfElements);
  }

});


























