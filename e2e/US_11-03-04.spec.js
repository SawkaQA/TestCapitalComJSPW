import { test, expect } from "@playwright/test";

test.describe("US_11.03.04_UnReg | Educations > Menu item [Position Trading]", () => {
  // const languages = [
  //     {
  //         langName: "English",
  //         langUrl: "a.js-analyticsClick[data-type='nav_lang_en']",
  //     },
  //     {
  //         langName: "Español",
  //         langUrl: "a.js-analyticsClick[data-type='nav_lang_es']",
  //     },
  // ];
  // languages.forEach((language) => {
  test.beforeEach(async ({ page }) => {
    // open capital.com
    await page.goto("/");
    //accept all Cookies
    await page.getByRole("button", { name: "Accept All Cookies" }).click();
    await page.locator("div .licLangSw__btn").hover();
    await page.getByRole("textbox").first().click();
    await page.getByRole("link", { name: "Spain" }).click();
    await page.locator("div .licLangSw__btn").hover();
    await page.locator(".hdrIcon").first().click();
    await page.getByRole("link", { name: "Español" }).click();
    //select menu item
    await page.locator(":nth-child(1) > .cc-nav__link--lvl1").hover();
    const isVisiblePosition = page.locator(
      '[class="cc-nav__dropdown gridRUp gXs "] [href="https://capital.com/position-trading"]'
    );

    if (await isVisiblePosition.isVisible()) {
      await isVisiblePosition.click();
    } else {
      testInfoError.message(
        console.log(
          `For test language the page "Education->Position Trading" doesn't exist on production`
        )
      );
      test.skip();
    }
  });

  test("TC_11.03.04_01_UnReg | Education > Menu Item [Position Trading] > Test button [Log in] in the header", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Log In" }).click();
    await expect(page.locator("#l_overlay")).toBeVisible();
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
});
// })
