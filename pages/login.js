class LoginPage {
    constructor(page) {
      this.page = page;
      this.userName = page.locator("#l_f_email > .field__control");
      this.password = page.locator("#l_f_pass > .field__control");
      this.continueButton = page.locator(".form-container-white > .form-container-small-content > form > .btn");
      this.BtnLogIn = page.locator("#wg_loginBtn");
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

  }
  module.exports = { LoginPage };