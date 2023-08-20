class LoginPage {
    constructor(page) {
      this.page = page;
      this.userName = page.locator("#l_f_email > .field__control");
      this.password = page.locator("#l_f_pass > .field__control");
      this.continueButton = page.locator(".form-container-white > .form-container-small-content > form > .btn");
      this.BtnLogIn = page.locator("#wg_loginBtn");
      this.BtnMyAccount = page.locator('button#wg_userarea');
      this.Btnlogout = page.locator('.logout-user');
      this.FormLogIn = page.locator("#l_overlay > .form-container-white");
    }
  
    async visit() {
      await this.page.goto("https://capital.com/");
    }
    
    async validLogin(email, password) {
      await this.userName.fill(email);
      await this.password.fill(password);
      await this.continueButton.click({force: true});
    }

    async clickBtnLogIn() {
      await this.BtnLogIn.click();
  }

  async loginAndContinue(email, password) {
    await this.clickBtnLogIn();
    await this.validLogin(email, password);
    await this.continueButton.waitFor();
    await this.continueButton.click();
  }

  async logoutUser() {
    await this.BtnMyAccount.click();
    await this.Btnlogout.click();
    
  }

  }
  module.exports = { LoginPage };