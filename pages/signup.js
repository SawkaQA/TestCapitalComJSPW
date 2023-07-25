class SignUpPage {
    constructor(page) {
      this.page = page;
      this.userName = page.locator("#s_overlay-email > .field__control");
      this.password = page.locator("#s_overlay-pass > .field__control");
      this.continueButton = page.locator(".signup-form > .form-container-small-content > form > .btn");
      this.BtnSignUp = page.locator("[data-type=btn_header]");
      this.FormSignUp = page.locator("#s_overlay > .form-container-white");
    }
  
    async visit() {
      await this.page.goto("https://capital.com/");
    }
    
    async validSignUp(email, password) {
      await this.userName.fill(email);
      await this.password.fill(password);
      await this.continueButton.click();
    }

    async clickBtnSignUp() {
      await this.BtnSignUp.click();
  }

  }
  module.exports = { SignUpPage };