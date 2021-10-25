class EditUsersList {
    getEditUserTitle(){
        return cy.get('.h-title', { timeout: 100000 });
    }

}
export default EditUsersList;