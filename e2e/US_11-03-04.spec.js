import { test, expect } from "@playwright/test";
const language = "Français";
const country = "France";

test.describe("Educations > Menu item [Position Trading]", () => {
  test.beforeEach(async ({ page }) => {
    // open capital.com
    await page.goto("/");
    //accept all Cookies
    await page.getByRole("button", { name: "Accept All Cookies" }).click();
    // select country and language
    await page.locator("div .licLangSw__btn").hover();
    await page.getByRole("textbox").first().click();
    await page.getByRole("link", { name: country }).click();
    await page.locator("div .licLangSw__btn").hover();
    await page.getByRole("link", { name: language }).click();
    //select menu item
    await page.locator(":nth-child(1) > .cc-nav__link--lvl1").hover();
    const isVisiblePosition = page.locator(
      '[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]'
    );
    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      console.log(
        `For test on ${language} language the page "Education->Position Trading" doesn't exist on production`
      );
      test.skip();
    }
  });

  test(`TC_11.03.04_01_UnReg  > Test button [Log in] in the header on '${language}' language`, async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Log in" }).click();
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

  test(`TC_11.03.04_02_UnReg  > Test button [Sign up] in the header on '${language}' language`, async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Sign up" }).click();
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

  test(`TC_11.03.04_03_UnReg  > Test button [Start Trading] in Main banner of ${language} language`, async ({
    page,
  }) => {
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

  test(`TC_11.03.04_04_UnReg  > Test button [Try Demo] in Main banner of ${language} language`, async ({
    page,
  }) => {
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

  test(`TC_11.03.04_05_UnReg  > Test buttons [Trade] on Widget "Most traded" of ${language} language`, async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Trade" }).click();
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
});
