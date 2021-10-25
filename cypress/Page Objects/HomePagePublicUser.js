import LogIn from "./LogIn";
import ViewBallots from "./ViewBallots";

class HomePagePublicUser {
   getDisplayName() {
      //return cy.get('.card-header > h4', { timeout: 100000 });
      return cy.get('.text-info > .ng-tns-c2-0');
   }

   clickView() {
      cy.get(':nth-child(1) > :nth-child(4) > .btn', { timeout: 100000 }).click();
      return new ViewBallots();
   }

   clickLogout() {
      cy.get('.text-inverse > .ng-tns-c2-0', { timeout: 100000 }).click();
      return new LogIn();
   }

}
export default HomePagePublicUser;