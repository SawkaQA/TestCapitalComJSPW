const { test, expect } = require("@playwright/test");
const { Header } = require("../../pages/header");
const { LoginPage } = require("../../pages/login");

test.describe("Educations > Menu item [Position Trading]", () => {
  let header;
  let login;
  const language = "English";
  const country = "United Kingdom"
  // const languages = [
  //   {
  //     langName: "English",
  //     langUrl: "a.js-analyticsClick[data-type='nav_lang_en']",
  //   },
  // {
  //   langName: "Deutsch",
  //   langUrl: "a.js-analyticsClick[data-type='nav_lang_de']",
  // },
  // ];

  let page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();

    header = new Header(page);
    login = new LoginPage(page);
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
    // await page.locator(languages.langUrl).click({ force: true });

    test.step("Hover on Education menu", async () => {
      await header.getEducationMenu.hover();
      const isVisiblePosition = page.locator('[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]');

      if (await isVisiblePosition.isVisible()) {
        await isVisiblePosition.click();
        // } else {
        //   await test.step("Check visible links on page for languages", async () => {
        //     console.log(
        //       `For test on '${language}' language the page "Education->Position Trading" doesn't exist on production`
        //     );
        //     test.skip();
        //   });
      }
    })
  })

  test(`TC_11.03.04_01_UnReg  > Test button [Log in] in the header on '${language}' language`, async () => {

    header = new Header(page);
    login = new LoginPage(page);

    await login.clickBtnLogIn();
    await expect(
      page.locator("#l_overlay > .form-container-white")
    ).toBeVisible();
    await expect(page.locator("#l_overlay").getByText("Login")).toHaveText(
      /Login/
    );
    await expect(
      page.getByRole("textbox", { name: "Email address" })
    ).toHaveAttribute("type", "email");
    await expect(
      page.getByRole("textbox", { name: "Password" })
    ).toHaveAttribute("type", "password");
    expect(await page.getByLabel("Log me out after 7 days").isChecked());
    await expect(
      page.getByRole("link", { name: "Forgot password?" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(
      /Continue/
    );
    await expect(
      page.locator("#l_overlay").getByRole("link", { name: "Sign up" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_02_UnReg  > Test button [Sign up] in the header on '${language}' language`, async () => {

    header = new Header(page);
    login = new LoginPage(page);
    await page.getByRole('link', { name: 'Sign up' }).click();
    await expect(
      page.locator("#s_overlay > .form-container-white")
    ).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(
      /Sign up/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Login" })
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Email address" })
    ).toHaveAttribute("type", "email");
    await expect(
      page.getByRole("textbox", { name: "Password" })
    ).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(
      /Continue/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_03_UnReg  > Test button [Start Trading] in Main banner on '${language}' language`, async () => {

    header = new Header(page);
    login = new LoginPage(page);
    await page.getByRole("link", { name: "Start Trading" }).click();
    await expect(
      page.locator("#s_overlay > .form-container-white")
    ).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(
      /Sign up/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Login" })
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Email address" })
    ).toHaveAttribute("type", "email");
    await expect(
      page.getByRole("textbox", { name: "Password" })
    ).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(
      /Continue/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_04_UnReg  > Test button [Try Demo] in Main banner on '${language}' language`, async () => {

    header = new Header(page);
    login = new LoginPage(page);
    await page.getByRole("link", { name: "Try Demo" }).click();
    await expect(
      page.locator("#s_overlay > .form-container-white")
    ).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(
      /Sign up/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Login" })
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Email address" })
    ).toHaveAttribute("type", "email");
    await expect(
      page.getByRole("textbox", { name: "Password" })
    ).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(
      /Continue/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_05_UnReg  > Test buttons [Trade] on Widget "Most traded" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await page.getByRole('link', { name: 'Trade', exact: true }).first().click();
    await expect(
      page.locator("#s_overlay > .form-container-white")
    ).toBeVisible();
    await expect(page.locator("#s_overlay").getByText("Sign up")).toHaveText(
      /Sign up/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Login" })
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Email address" })
    ).toHaveAttribute("type", "email");
    await expect(
      page.getByRole("textbox", { name: "Password" })
    ).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(
      /Continue/
    );
    await expect(
      page.locator("#s_overlay").getByRole("link", { name: "Privacy Policy" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Cancel" }).click();
  });

  test(`TC_11.03.04_06_UnReg  > Test button [Download on the App Store] in the block "Sign up and trade smart today"  on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await page.locator('.onelink-mobile-url').first().click();
    await expect(page.getByRole('link', { name: 'App Store' })).toBeVisible();
    await expect(page.locator('picture#ember3')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital.com: Trading & Finance 17+' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Capital Com SV Investments Limited' })).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  })

  test(`TC_11.03.04_07_UnReg  > Test button [Get it on Google Play] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await page.locator('.banner-capital__buttons > a:nth-child(2)').click();
    await expect(page.locator('a.f0UV3d')).toBeVisible();
    await expect(page.locator('h1.Fd93Bb.F5UCq.p5VxAd')).toHaveText(/Online Broker - Capital.com/);
    await expect(page.locator('div.Vbfug.auoIOc')).toBeVisible();
    await page.goto('https://capital.com/position-trading');
  })

  test(`TC_11.03.04_08_UnReg  > Test button [Explore Web Platform] in the block "Sign up and trade smart today" on '${language}' language`, async () => {
    header = new Header(page);
    login = new LoginPage(page);
    await page.locator('.badge-platform').click();;
    await expect(
      page.locator('.modal')
    ).toBeVisible();
    await expect(page.locator(".modal__header").getByText("Sign up")).toHaveText(
      /Sign up/
    );
    await expect(
      page.locator(".txt__link").getByRole("link", { name: "Login" })
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Email address" })
    ).toHaveAttribute("type", "email");
    await expect(
      page.getByRole("textbox", { name: "Password" })
    ).toHaveAttribute("type", "password");
    await expect(page.getByRole("button", { name: "Continue" })).toHaveText(
      /Continue/
    );
    await expect(
      page.locator(".checkbox__link").getByRole("link", { name: "Privacy Policy" })
    ).toBeVisible();
    await page.goBack();
  })
})
