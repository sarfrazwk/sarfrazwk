import HomePage from './HomePage';
import HomePagePublicUser from './HomePagePublicUser';
import RecoverPasswordRequestForm from './RecoverPasswordRequestForm';

export class LogIn {

  Visit(appLink) {
    cy.visit(appLink);
  }

  getWrongUserNamePasswordMessage() {
    cy.get('#loginButton').click();
    return cy.get('#connectionError');
  }

  getLogInPageTitle() {
      return cy.get('#loginTitle');
  }

  fillUserNamePassword(value1, value2) {
    (cy.get('#username', { timeout: 100000 })).clear().type(value1);
    (cy.get('#password')).clear().type(value2);
  }

  fillPassword(value) {
    (cy.get('#password')).clear().type(value);
  }

  clickLoginButton(user) {
    cy.get('#loginButton').click();
    if (user == 'P'){
      return new HomePagePublicUser();
    }
    else {
      return new HomePage();
    }
  }

  getForgotPasswordLink() {
    return cy.get('#forgotPassword');
  }

  clickForgotPasswordLink(){
    cy.get('#forgotPassword').click();
    return new RecoverPasswordRequestForm();
  }

}
export default LogIn;