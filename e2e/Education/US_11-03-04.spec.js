const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
const { LoginPage } = require("../../pages/login");
const { SignUpPage } = require("../../pages/signup");
const { BannerBtn } = require("../../pages/bannerButtons")

let header;
let page;
let bannerBtn;
let signup;
let login;

const testData = {
    email: "alexviktoria1609@gmail.com",
    password: "Av-123456789",
}

const language = "en"
const country = "United Kingdom";

test.describe("US_11-03-04_Education > Menu item [Position Trading]  on UnReg Role", () => {

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
        await header.clickDropdownCountry();
        await header.clickGetCountry();
        await header.hoverCountryAndLang();
        await header.clickGetLanguage();
    });

    test(`TC_11.03.04_01_UnReg  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickStartTradingBtnOnMainBanner();
        expect(await signup.FormSignUp).toBeVisible();
        expect(await signup.LoginLinkForm).toBeVisible();
        expect(await signup.UserName).toHaveAttribute("type", "email");
        expect(await signup.Password).toHaveAttribute("type", "password");
        expect(await signup.ContinueButton).toBeVisible();
        expect(await signup.TextContinueButton()).toMatch(/Continue/)
        expect(await signup.PolicyLink).toBeVisible();
        await signup.clickCloseSignUpFormBtn();
    });

    test(`TC_11.03.04_02_UnReg  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickTryDemoBtnOnMainBanner()
        expect(await signup.FormSignUp).toBeVisible();
        expect(await signup.LoginLinkForm).toBeVisible();
        expect(await signup.UserName).toHaveAttribute("type", "email");
        expect(await signup.Password).toHaveAttribute("type", "password");
        expect(await signup.ContinueButton).toBeVisible();
        expect(await signup.TextContinueButton()).toMatch(/Continue/)
        expect(await signup.PolicyLink).toBeVisible();
        await signup.clickCloseSignUpFormBtn();
    });

    test(`TC_11.03.04_03_UnReg  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await page.waitForLoadState('networkidle');
        await bannerBtn.clickTradeBtnOnWidgetMostTraded();
        // await page.waitForTimeout(3000);
        expect(await signup.FormSignUp).toBeVisible();
        expect(await signup.LoginLinkForm).toBeVisible();
        expect(await signup.UserName).toHaveAttribute("type", "email");
        expect(await signup.Password).toHaveAttribute("type", "password");
        expect(await signup.ContinueButton).toBeVisible();
        expect(await signup.TextContinueButton()).toMatch(/Continue/)
        expect(await signup.PolicyLink).toBeVisible();
        await signup.clickCloseSignUpFormBtn();
    });

    test(`TC_11.03.04_04_UnReg  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickDownloadOnAppStoreBtn();
        // await page.waitForLoadState('networkidle');
        await page.waitForLoadState('load')
        expect(await bannerBtn.LogoAppStore).toBeVisible();
        expect(await bannerBtn.IconCapital).toBeVisible();
        expect(await bannerBtn.ProductNameOnAppstore).toBeVisible();
        expect(await bannerBtn.LinkCapitalComOnAppstore).toBeVisible();
        await page.goBack();
    })

    test(`TC_11.03.04_05_UnReg  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickDownloadOnGooglePlayLink();
        await page.waitForLoadState('load')
        expect(await bannerBtn.LogoGooglePlay).toBeVisible();
        expect(await bannerBtn.ProdactNameOnGoogleplay).toHaveText(/Online Broker - Capital.com/);
        expect(await bannerBtn.LinkCapitalComOnGoogleplay).toBeVisible();
        await page.waitForTimeout(3000);
        await page.goBack();

    })

    test(`TC_11.03.04_06_UnReg  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickExploreWebPlatformLink();
        // await page.waitForLoadState('load');
        await page.waitForLoadState('networkidle');
        // await page.waitForNavigation()
        expect(await signup.FormSignUpOnPaltform).toBeVisible();
        expect(await signup.LoginLinkFormOnPlatform).toBeVisible();
        expect(await signup.EmailOnPlatform).toHaveAttribute("type", "email");
        expect(await signup.PasswordOnPlatform).toHaveAttribute("type", "password");
        expect(await signup.ContinueButton).toBeVisible();
        expect(await signup.ContinueButtonOnPlatform).toHaveText(/Continue/);
        expect(await signup.CloseSignUpFormOnPlatform).toBeVisible();
        await page.waitForLoadState('networkidle');
        await page.goBack();
    });

    test(`TC_11.03.04_07_UnReg  > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        signup = new SignUpPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickCreateAndVerifyBtn();
        await page.waitForLoadState('networkidle');
        // await page.waitForTimeout(5000);
        await expect(signup.FormSignUp).toBeVisible();
        expect(await signup.LoginLinkForm).toBeVisible();
        expect(await signup.UserName).toHaveAttribute("type", "email");
        expect(await signup.Password).toHaveAttribute("type", "password");
        expect(await signup.ContinueButton).toBeVisible();
        expect(await signup.TextContinueButton()).toMatch(/Continue/)
        expect(await signup.PolicyLink).toBeVisible();
        await signup.clickCloseSignUpFormBtn();
    });
});

test.describe("US_11-03-04_Education > Menu item [Position Trading] on UnAuth Role", () => {
    
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        header = new Header(page);
        login = new LoginPage(page);
        // open capital.com
        await page.goto("/");
         // user unauthorization
         await login.loginAndContinue(testData.email, testData.password);
        //  await page.waitForLoadState('networkidle');
         await page.goBack();
        await page.waitForLoadState('networkidle');
         await login.logoutUser();
        // select country and language
        await header.hoverCountryAndLang();
        await header.clickDropdownCountry();
        await header.clickGetCountry();
        await header.hoverCountryAndLang();
        await header.clickGetLanguage();

    });

    test(`TC_11.03.04_01_UnAuth  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickStartTradingBtnOnMainBanner();
        await login.FormLoginBeVisible()
        await expect(login.HeaderNameLogIn).toBeVisible();
        expect(await login.UserName).toHaveAttribute("type", "email");
        expect(await login.Password).toHaveAttribute("type", "password");
        expect(await login.LogMeAfter).isChecked();
        await expect(login.ForgotPasswordLink).toBeVisible();
        await expect(login.ContinueButton).toBeVisible();
        await expect(login.SignUpLinkForm).toBeVisible();
        await login.CloseLoginFormBtn.click();
    })

    test(`TC_11.03.04_02_UnAuth  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading()
        await bannerBtn.clickTryDemoBtnOnMainBanner();
        await login.FormLoginBeVisible()
        await expect(login.HeaderNameLogIn).toBeVisible();
        expect(await login.UserName).toHaveAttribute("type", "email");
        expect(await login.Password).toHaveAttribute("type", "password");
        expect(await login.LogMeAfter).isChecked();
        await expect(login.ForgotPasswordLink).toBeVisible();
        await expect(login.ContinueButton).toBeVisible();
        await expect(login.SignUpLinkForm).toBeVisible();
        await login.CloseLoginFormBtn.click();
    });

    test(`TC_11.03.04_03_UnAuth  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading();
        await bannerBtn.clickTradeBtnOnWidgetMostTraded();
        await login.FormLoginBeVisible()
        await expect(login.HeaderNameLogIn).toBeVisible();
        expect(await login.UserName).toHaveAttribute("type", "email");
        expect(await login.Password).toHaveAttribute("type", "password");
        expect(await login.LogMeAfter).isChecked();
        await expect(login.ForgotPasswordLink).toBeVisible();
        await expect(login.ContinueButton).toBeVisible();
        await expect(login.SignUpLinkForm).toBeVisible();
        await login.CloseLoginFormBtn.click();
    });

    test(`TC_11.03.04_04_UnAuth  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        await header.clickPositionTrading();
        await bannerBtn.clickDownloadOnAppStoreBtn();
        // await page.locator('.onelink-mobile-url').first().click();
        await expect(page.getByRole('link', { name: 'App Store' })).toBeVisible();
        await expect(page.locator('picture#ember3')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Capital.com: Trading & Finance 17+' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Capital Com SV Investments Limited' })).toBeVisible();
        await page.goBack();
    });

    test(`TC_11.03.04_05_UnAuth  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }

        await bannerBtn.clickDownloadOnGooglePlayLink();
        await page.waitForTimeout(10000);
        try {
            await expect(page.locator('a.f0UV3d')).toBeVisible();
            await expect(page.locator('h1.Fd93Bb.F5UCq.p5VxAd')).toHaveText(/Online Broker - Capital.com/);
            await expect(page.locator('div.Vbfug.auoIOc')).toBeVisible();
            await page.goBack();
        } catch (error) {
            console.log(`The link to App Store instead of Google Play`)
            throw new Error();
        }

    });

    test(`TC_11.03.04_06_UnAuth  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await bannerBtn.clickExploreWebPlatformLink();
        await page.waitForTimeout(10000);
        try {
            await expect(page.locator("cdk-dialog-container#login")).toBeVisible();
        } catch (error) {
            console.log("Opened a 'Sign up' form instead of a 'Login' form");
            throw new Error();
        }
        expect(await page.locator('cdk-dialog-container#login')).toBeVisible();
        expect(await page.locator(".modal__header-title").getByText("Login")).toHaveText(/Login/);
        expect(await page.locator(":nth-child(1) > .txt__link").getByRole("link", { name: "Sign Up" })).toBeVisible();
        expect(await page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
        expect(await page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
        expect(await page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
        await page.goBack();
    });

    test(`TC_11.03.04_07_UnAuth  > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" on '${language}' language`, async () => {
        bannerBtn = new BannerBtn(page);
        header = new Header(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await bannerBtn.clickCreateAndVerifyBtn();
        await page.waitForTimeout(10000);
        expect(await page.locator("#s_overlay > .form-container-white")).toBeVisible();
        expect(await page.locator("#s_overlay").getByText("Sign up")).toHaveText(/Sign up/);
        expect(await page.locator("#s_overlay").getByRole("link", { name: "Login" })).toBeVisible();
        expect(await page.getByRole("textbox", { name: "Email address" })).toHaveAttribute("type", "email");
        expect(await page.getByRole("textbox", { name: "Password" })).toHaveAttribute("type", "password");
        expect(await page.getByRole("button", { name: "Continue" })).toHaveText(/Continue/);
        expect(await page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })).toBeVisible();
        await page.getByRole("button", { name: "Cancel" }).click();
    });
});

test.describe("US_11-03-04_Education > Menu item [Position Trading] on Auth Role", () => {
    let header;
    let login;
    let page;
    let bannerBtn;
    const testData = {
        email: "alexviktoria1609@gmail.com",
        password: "Av-123456789",
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
        // await login.continueButton.waitFor();
        await login.continueButton.click();
        await page.waitForLoadState('networkidle');
        await page.goBack();
        await page.waitForLoadState('networkidle');
        // select country and language
        await header.hoverCountryAndLang();
        await page.getByRole("textbox").first().click();
        await page.getByRole("link", { name: country }).click();
        await header.hoverCountryAndLang()
        await page.getByRole("link", { name: language }).click();
    });

    test(`TC_11.03.04_01_Auth  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await page.getByRole("link", { name: "Start Trading" }).click();
        await page.waitForTimeout(20000);
        expect(await page).toHaveURL('https://capital.com/trading/platform/');
        await page.goBack();
    });

    test(`TC_11.03.04_02_Auth  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        bannerBtn = new BannerBtn(page)
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await bannerBtn.clickTryDemoBtnOnMainBanner();
        await page.waitForTimeout(3000);
        expect(await page).toHaveURL('https://capital.com/trading/platform/?mode=demo');
        // expect(await page.locator('object.logo')).toBeVisible();
        await page.waitForTimeout(3000);
        await page.goBack();
    });

    test(`TC_11.03.04_03_Auth  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }

        try {
            await bannerBtn.TradeBtnOnWidgetMostTraded.isVisible();
            await bannerBtn.clickTradeBtnOnWidgetMostTraded();
        } catch (error) {
            console.log(`For test on '${country}' the button [Trade] doen't displayed `)
            throw new Error();
        }
        await page.waitForTimeout(10000);
        expect(await page).toHaveURL('https://capital.com/trading/platform/charting/');
        // expect(await page.locator('object.logo')).toBeVisible();
        await page.waitForTimeout(10000);
        await page.goBack();
    });

    test(`TC_11.03.04_04_Auth  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForTimeout(10000);
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await page.locator('.onelink-mobile-url').first().click();
        await page.waitForLoadState('networkidle');
        expect(await page.getByRole('link', { name: 'App Store' })).toBeVisible();
        expect(await page.locator('picture#ember3')).toBeVisible();
        expect(await page.getByRole('heading', { name: 'Capital.com: Trading & Finance 17+' })).toBeVisible();
        expect(await page.getByRole('heading', { name: 'Capital Com SV Investments Limited' })).toBeVisible();
        await page.goBack();
    });

    test(`TC_11.03.04_05_Auth  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        try {
            await expect(page.locator('a.f0UV3d')).toBeVisible();
            await expect(page.locator('h1.Fd93Bb.F5UCq.p5VxAd')).toHaveText(/Online Broker - Capital.com/);
            await expect(page.locator('div.Vbfug.auoIOc')).toBeVisible();
            await page.goto('https://capital.com/position-trading');
        } catch (error) {
            console.log(`The link to App Store instead of Google Play`)
            throw new Error();
        }
    });

    test(`TC_11.03.04_06_Auth  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        await header.getEducationMenu.hover();
        await page.waitForLoadState('networkidle');
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await page.locator('[data-type="banner_capital_platform"]').click();
        // await page.waitForLoadState('load');
        // await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        expect(await page).toHaveURL('https://capital.com/trading/platform/');
        await page.waitForTimeout(3000);
        // expect(await page.locator('object.logo')).toBeVisible();
        await page.goBack();
    });

    test(`TC_11.03.04_07_Auth  > Test button [Create & verify your account] in the block "Still looking for a broker you can trust?" on '${language}' language`, async () => {
        header = new Header(page);
        login = new LoginPage(page);
        bannerBtn = new BannerBtn(page)
        await header.getEducationMenu.hover();
        await page.waitForTimeout(5000);
        const isVisiblePosition = page.locator('a[data-type="nav_id528"]');

        if (await isVisiblePosition.isVisible()) {
            await isVisiblePosition.click();
        } else {
            console.log(`For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`);
            test.skip();
        }
        await bannerBtn.clickCreateAndVerifyBtn();
        // await page.waitForLoadState('load');
        // await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        // await page.waitForURL('https://capital.com/trading/platform/');
        await expect(page).toHaveURL('https://capital.com/trading/platform/');
        // expect(await page.locator('object.logo')).toBeVisible();
        await page.waitForTimeout(3000);
        await page.goBack();
    });
})
