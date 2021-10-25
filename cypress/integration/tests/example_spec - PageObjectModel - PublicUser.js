import logIn from '../../Page Objects/LogIn'
import testingData from '../../Test Data/TestData'

describe("Public User.", () => {
  
  let logInPage = new logIn();

  beforeEach(function () {
    logInPage.Visit(testingData.Link.Link);
  });

  it("Test case - 1", () => {
      (loginWith()).getDisplayName().should('contain.text', testingData.Home.DisplayName);
  });

  it("Test case - 2", () => {
     const vBallots = (loginWith()).clickView();
    vBallots.getViewBallotsTitle().should('contain.text', testingData.ViewBallots.Filter);
  });

  it("Test case - 3", () => {
    const vBallots = (loginWith()).clickView();
    vBallots.getViewBallotsTotal().should('contain.text', testingData.ViewBallots.BallotsTotal);
  });

  it("Test case - 4", () => {
    const lgPage = (loginWith()).clickLogout();
    lgPage.getLogInPageTitle().should('contain.text', testingData.Login.Title);   
});

  let loginWith = () => {
    logInPage.fillUserNamePassword(testingData.Login.PublicUserName, testingData.Login.PublicPassword)
   // logInPage.fillUserName(testingData.Login.PublicUserName);
    //logInPage.fillPassword(testingData.Login.PublicPassword);
    return logInPage.clickLoginButton('P');
  }
});