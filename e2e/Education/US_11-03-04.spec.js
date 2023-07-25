const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
const { LoginPage } = require("../../pages/login");
const { SignUpPage } = require("../../pages/signup");
const { BannerBtn } = require("../../pages/bannerButtons")

let header;
let login;
let page;
let signup;
let bannerBtn;
const language = "العَرَبِيَّة";
const country = "United Arab Emirates";

test.describe("Educations_US_11-03-04 > Menu item [Position Trading]  on UnReg Role", () => {
  
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
  });

  test(`TC_11.03.04_01_UnReg  > Test button [Log in] in the header on '${language}' language`, async () => {
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await login.clickBtnLogIn();
    await expect(page.locator("#l_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#l_overlay").getByText("Login")).toHaveText(/Login/);
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    expect(await page.getByLabel("Log me out after 7 days").isChecked());
    await expect(page.getByRole("link", { name: "Forgot password?" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#l_overlay").getByRole("link", { name: "Sign up" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_02_UnReg  > Test button [Sign up] in the header on '${language}' language`, async () => {
    signup = new SignUpPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await signup.clickBtnSignUp();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up"));
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_03_UnReg  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickStartTradingBtnOnMainBanner();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_04_UnReg  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickTryDemoBtnOnMainBanner()
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_05_UnReg  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickTradeBtnOnWidgetMostTraded();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_06_UnReg  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickDownloadOnAppStoreBtn();
    // await page.locator('.onelink-mobile-url').first().click();
    await expect(page.getByRole('link', { name: 'App Store' })).toBeVisible();
    await expect(page.locator('picture#ember3')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital.com: Trading & Finance 17+' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital Com SV Investments Limited' })).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  })

  test(`TC_11.03.04_07_UnReg  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickDownloadOnGooglePlayLink();
    // await page.locator('.banner-capital__buttons > a:nth-child(2)').click();
    await expect(page.locator('a.f0UV3d')).toBeVisible();
    await expect(page.locator('h1.Fd93Bb.F5UCq.p5VxAd')).toHaveText(/Online Broker - Capital.com/);
    await expect(page.locator('div.Vbfug.auoIOc')).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  })

  test(`TC_11.03.04_08_UnReg  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickExploreWebPlatformLink();
    await page.waitForLoadState('networkidle')
    // await expect(page.locator('.modal')).toBeVisible();
    await expect(page.locator(".modal__header").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator(".txt__link").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator(".checkbox__link").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.goBack();
  });

  test(`TC_11.03.04_09_UnReg  > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickCreateAndVerifyBtn();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });
});

test.describe("Educations_US_11-03-04 > Menu item [Position Trading] on UnAuth Role", () => {
  const testData = {
    email: "sadsass@gmail.com",
    password: "123Qwert!@dsdDs",
  }

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      testData: '../../fixtures/testData.json'
    });
    page = await context.newPage();
    header = new Header(page);
    login = new LoginPage(page);
    // open capital.com
    await page.goto("/");
    // user unauthorization
    await login.clickBtnLogIn();
    await login.validLogin(testData.email, testData.password);
    await login.continueButton.waitFor();
    await login.continueButton.click();
    await page.waitForLoadState('networkidle');
    await page.goBack();
    await page.waitForLoadState('networkidle');
    await page.locator('#wg_userarea').click();
    await page.locator('.logout-user').click();
    // select country and language
    await header.hoverCountryAndLang();
    await page.getByRole("textbox").first().click();
    await page.getByRole("link", { name: country }).click();
    await header.hoverCountryAndLang()
    await page.getByRole("link", { name: language }).click();
  });

  test(`TC_11.03.04_01_UnAuth  > Test button [Log in] in the header on '${language}' language`, async () => {
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await login.clickBtnLogIn();
    await expect(page.locator("#l_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#l_overlay").getByText("Login")).toHaveText(/Login/);
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    expect(await page.getByLabel("Log me out after 7 days").isChecked());
    await expect(page.getByRole("link", { name: "Forgot password?" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#l_overlay").getByRole("link", { name: "Sign up" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_02_UnAuth  > Test button [Sign up] in the header on '${language}' language`, async () => {
    signup = new SignUpPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await signup.clickBtnSignUp();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_03_UnAuth  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickStartTradingBtnOnMainBanner();
    await expect(page.locator("#l_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#l_overlay").getByText("Login")).toHaveText(/Login/);
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    expect(await page.getByLabel("Log me out after 7 days").isChecked());
    await expect(page.getByRole("link", { name: "Forgot password?" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#l_overlay").getByRole("link", { name: "Sign up" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_04_UnAuth  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickTryDemoBtnOnMainBanner();
    await expect(page.locator("#l_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#l_overlay").getByText("Login")).toHaveText(/Login/);
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    expect(await page.getByLabel("Log me out after 7 days").isChecked());
    await expect(page.getByRole("link", { name: "Forgot password?" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#l_overlay").getByRole("link", { name: "Sign up" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_05_UnAuth  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickTradeBtnOnWidgetMostTraded();
    await page.getByRole('link', { name: 'Trade', exact: true }).first().click();
    await expect(page.locator("#l_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#l_overlay").getByText("Login")).toHaveText(/Login/);
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    expect(await page.getByLabel("Log me out after 7 days").isChecked());
    await expect(page.getByRole("link", { name: "Forgot password?" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#l_overlay").getByRole("link", { name: "Sign up" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_06_UnAuth  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickDownloadOnAppStoreBtn();
    await page.locator('.onelink-mobile-url').first().click();
    await expect(page.getByRole('link', { name: 'App Store' })).toBeVisible();
    await expect(page.locator('picture#ember3')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital.com: Trading & Finance 17+' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital Com SV Investments Limited' })).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  });

  test(`TC_11.03.04_07_UnAuth  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickDownloadOnGooglePlayLink();
    await page.locator('.banner-capital__buttons > a:nth-child(2)').click();
    await expect(page.locator('a.f0UV3d')).toBeVisible();
    await expect(page.locator('h1.Fd93Bb.F5UCq.p5VxAd')).toHaveText(/Online Broker - Capital.com/);
    await expect(page.locator('div.Vbfug.auoIOc')).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  });

  test(`TC_11.03.04_08_UnAuth  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickExploreWebPlatformLink();
    await page.locator('.badge-platform').click();;
    await expect(page.locator('cdk-dialog-container#login')).toBeVisible({ timeout: 10000 });
    await expect(page.locator(".modal__header-title").getByText("Login")).toHaveText(/Login/);
    await expect(page.locator(":nth-child(1) > .txt__link").getByRole("link", { name: "Sign Up" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await page.goBack();
  });

  test(`TC_11.03.04_09_UnAuth  > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" on '${language}' language`, async () => {
    bannerBtn = new BannerBtn(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await bannerBtn.clickCreateAndVerifyBtn();
    await page.locator('.regSteps__shape > .js_signup').click();
    await expect(page.locator("#s_overlay > .form-container-white")).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
    await expect(page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
    await expect(page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });
});

test.describe("Educations_US_11-03-04 > Menu item [Position Trading] on Auth Role", () => {
  let header;
  let login;
  let page;

  const testData = {
    email: "sadsass@gmail.com",
    password: "123Qwert!@dsdDs",
  }

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({
      testData: '../../fixtures/testData.json'
    });
    page = await context.newPage();
    header = new Header(page);
    login = new LoginPage(page);
    // open capital.com
    await page.goto("/");
    // user authorization
    await login.clickBtnLogIn();
    await login.validLogin(testData.email, testData.password);
    await login.continueButton.waitFor();
    await login.continueButton.click();
    await page.waitForLoadState('networkidle');
    await page.goBack();
    // select country and language
    await header.hoverCountryAndLang();
    await page.getByRole("textbox").first().click();
    await page.getByRole("link", { name: country }).click();
    await header.hoverCountryAndLang()
    await page.getByRole("link", { name: language }).click();
   
  });

  test(`TC_11.03.04_01_Auth  > Test button [Log in] in the header on '${language}' language`, async () => {
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await expect(login.BtnLogIn).toBeHidden();
  });

  test(`TC_11.03.04_02_Auth  > Test button [Sign up] in the header on '${language}' language`, async () => {
    signup = new SignUpPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await expect(page.getByRole('link', { name: 'Sign up' })).toBeHidden();
  });

  test(`TC_11.03.04_03_Auth  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.getByRole("link", { name: "Start Trading" }).click();
    expect(page).toHaveURL('https://capital.com/trading/platform/');
    await page.goBack();
  });

  test(`TC_11.03.04_04_Auth  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.getByRole("link", { name: "Try Demo" }).click();
    expect(page).toHaveURL('https://capital.com/trading/platform/?mode=demo');
    await page.goBack();
  });

  test(`TC_11.03.04_05_Auth  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.getByRole('link', { name: 'Trade', exact: true }).first().click();
    expect(page).toHaveURL('https://capital.com/trading/platform/charting/');
    await page.goBack();
  });

  test(`TC_11.03.04_06_Auth  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.locator('.onelink-mobile-url').first().click();
    await expect(page.getByRole('link', { name: 'App Store' })).toBeVisible();
    await expect(page.locator('picture#ember3')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital.com: Trading & Finance 17+' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital Com SV Investments Limited' })).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  });

  test(`TC_11.03.04_07_Auth  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.locator('.banner-capital__buttons > a:nth-child(2)').click();
    await expect(page.locator('a.f0UV3d')).toBeVisible();
    await expect(page.locator('h1.Fd93Bb.F5UCq.p5VxAd')).toHaveText(/Online Broker - Capital.com/);
    await expect(page.locator('div.Vbfug.auoIOc')).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  });

  test(`TC_11.03.04_08_Auth  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.locator('.badge-platform').click();;
    expect(page).toHaveURL('https://capital.com/trading/platform/');
    await page.goBack();
  });

  test(`TC_11.03.04_09_Auth  > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await header.getEducationMenu.hover();
    const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
      test.skip();
    }
    await page.locator('.regSteps__shape > .js_signup').click();
    expect(page).toHaveURL('https://capital.com/trading/platform/');
    await page.goBack();
  });
});