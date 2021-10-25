import EditUsersList from './EditUsersList';

class HomePage{
    getHomePageTitle() {
        return cy.get('#home');
     }

     getUsersListTitle(){
        cy.get('#users').click();
        cy.get('#userslist').click();
        return cy.get('.h-title');
     }
     clickEditUser(){
        cy.get('#users').click();
        cy.get('#userslist').click();
        cy.get(':nth-child(1) > :nth-child(6) > .btn').click();
        return new EditUsersList();
      }
}
export default HomePage;