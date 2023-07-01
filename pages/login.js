class LoginPage {
    constructor(page) {
      this.page = page;
      this.userName = page.locator("#l_f_email > .field__control");
      this.password = page.locator("#l_f_pass > .field__control");
      this.continueButton = page.locator(".form-container-white > .form-container-small-content > form > .btn");
    }
  
    async visit() {
      await this.page.goto("https://capital.com/");
    }
  
    async validLogin(username, password) {
      await this.userName.fill(username);
      await this.password.fill(password);
      await this.continueButton.click();
    }
  }
  module.exports = { LoginPage };