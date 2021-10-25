import logIn from '../../Page Objects/LogIn'
import testingData from '../../Test Data/TestData'

describe("My First Testing With Cypress.", () => {

  let logInPage = new logIn();

  beforeEach(function () {
    logInPage.Visit(testingData.Link.Link);
  });                                    

  afterEach(function () {                                                                                                                                                                                                                                                                                                      
    logInPage = null;
    let logInPage = new logIn();
  });

  it("Test case - 1", () => {
    logInPage.getLogInPageTitle().should('have.text', 'Login');
  });

  it("Test case - 2", () => {
    logInPage.getForgotPasswordLink().should('have.text', testingData.Login.ForgotPasswordLink);
  });

 
  it("Test case - 3", () => {
    const fPwd = logInPage.clickForgotPasswordLink();
    fPwd.getRecoverPasswordRequestFormTitle().should('have.text', testingData.RecoverPassword.Title)
  });

  it("Test case - 4", () => {
    const fPwd = logInPage.clickForgotPasswordLink();
    const fPwdCancel = fPwd.clickCancelButton();
    fPwdCancel.getLogInPageTitle().should('have.text', 'Login');
  });

  /*
  it("C4 in testrail", () => {
    const fPwd = logInPage.clickForgotPasswordLink();
    fPwd.clickSubmitButton(testingData.Login.UserName).should('contain.text', testingData.RecoverPassword.Message)
  });

  it("C5 in testrail", () => {
    (loginWith()).getHomePageTitle().should('have.text', 'Home');
  });

  it("C6 in testrail", () => {
    (loginWith()).getUsersListTitle().should('contain', 'Users list');
  });

  it("C7 in testrail", () => {
    const editUser = loginWith().clickEditUser();
    editUser.getEditUserTitle().should('contain', 'Edit user');
  });

*/
  let loginWith = () => {
    logInPage.fillUserName(testingData.Login.UserName);
    logInPage.fillPassword(testingData.Login.Password);
    return logInPage.clickLoginButton('I');
  }
});




