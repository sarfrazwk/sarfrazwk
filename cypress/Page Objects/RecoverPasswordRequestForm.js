import logIn from './LogIn';
class RecoverPasswordRequestForm {

    getRecoverPasswordRequestFormTitle(){
        return cy.get('#recoverTitle');
    }

    clickSubmitButton(Username){
        cy.get('#userToRecover').type(Username);
        cy.get('#submiteRecoveryRequest').click();
        return cy.get('#recoverySent');
    }

    clickCancelButton(){
        cy.get('#cancelButton').click();
        return new logIn();
    }

}
export default RecoverPasswordRequestForm;