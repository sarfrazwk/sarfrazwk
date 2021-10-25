class ViewBallots {
    getViewBallotsTitle(){
        return cy.get('.col-md-2.ng-star-inserted > .btn');
    }

     getViewBallotsTotal(){
        return cy.get('.dv-vs-navigation > :nth-child(5)');
    }
}
export default ViewBallots;