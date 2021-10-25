import logIn from '../../Page Objects/LogIn'
import testingData from '../../Test Data/TestData'

describe("Public User.", () => {

  let logInPage = new logIn();

  beforeEach(function () {
    logInPage.Visit(testingData.Link.Link);
  });

  afterEach(function () {
    logInPage = null;
    let logInPage = new logIn();
  });

  it("Test case - 1", () => {
      logInPage.fillUserName(testingData.Login.UserName);
      logInPage.fillPassword(testingData.Login.InvalidPassword);
      logInPage.getWrongUserNamePasswordMessage().should('contain', testingData.Login.InvalidUPwdErrorMessage);
  });

  it("Test case - 2", () => {
      logInPage.fillUserName(testingData.Login.PublicUserName);
      logInPage.fillPassword(testingData.Login.InvalidPassword);
      logInPage.getWrongUserNamePasswordMessage().should('contain', testingData.Login.InvalidUPwdErrorMessage);
  });

  it("Test case - 3", () => {
        logInPage.fillUserName(testingData.Login.InvalidUserName);
        logInPage.fillPassword(testingData.Login.Password);
        logInPage.getWrongUserNamePasswordMessage().should('contain', testingData.Login.InvalidUPwdErrorMessage);
  });

  it("Test case - 4", () => {
        logInPage.fillUserName(testingData.Login.InvalidUserName);
        logInPage.fillPassword(testingData.Login.PublicPassword);
        logInPage.getWrongUserNamePasswordMessage().should('contain', testingData.Login.InvalidUPwdErrorMessage);
  });

  it("Test case - 5", () => {
          logInPage.fillUserName(testingData.Login.InvalidUserName);
          logInPage.fillPassword(testingData.Login.InvalidPassword);
          logInPage.getWrongUserNamePasswordMessage().should('contain', testingData.Login.InvalidUPwdErrorMessage);
  });

  it("Test case - 6", () => {
      logInPage.fillUserName(testingData.Login.InvalidUserName);
      logInPage.fillPassword(testingData.Login.InvalidPassword);
      logInPage.getWrongUserNamePasswordMessage().should('contain', testingData.Login.InvalidUPwdErrorMessage);
  });

  it("Test case - 7", () => {
    (loginWith()).getHomePageTitle().should('contain.text',testingData.Home.DisplayName);
  });

  let loginWith = () => {
    logInPage.fillUserName(testingData.Login.PublicUserName);
    logInPage.fillPassword(testingData.Login.PublicPassword);
    return logInPage.clickLoginButton('P');
  }
});