class HomePage { 
    visit(){
        cy.visit(Cypress.env('baseUrl'))
    }
}

export default new HomePage();