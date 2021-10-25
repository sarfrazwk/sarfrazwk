import logIn from '../../Page Objects/LogIn'
import testingData from '../../Test Data/TestData'

describe("Public User.", () => {

  const vBallots;
  let logInPage;

  beforeEach(function () {
    logInPage = new logIn();
    logInPage.Visit(testingData.Link.Link);
  });

  it("Test case - 1", () => {
    //Test to check Display name
      (loginWith()).getDisplayName().should('contain.text', testingData.Home.DisplayName);
  });

  it("Test case - 2", () => {
    vBallots = (loginWith()).clickView();
    vBallots.getViewBallotsTitle().should('contain.text', testingData.ViewBallots.Filter);
  });

  it("Test case - 3", () => {
    vBallots = (loginWith()).clickView();
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