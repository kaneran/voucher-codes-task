import Header from "./Header";

class HomePage { 
    visit(){
        cy.visit(Cypress.env('baseUrl'))
        Header.voucherCodesHeaderLogo.should('be.visible')
    }
}

export default new HomePage();