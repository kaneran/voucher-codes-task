class Header {
    get voucherCodesHeaderLogo() { return cy.get('[data-qa="el:vcLogoLink"]') }

    clickHeaderLink(linkText, headerActive=false){
        cy.get(`[data-qa="el:${linkText}Header active:${headerActive}"]`).should('be.visible').click()
    }
    clickCategoryLink(categoryText){
        cy.get('[data-qa="el:adminableCategoryText"]').contains(categoryText).should('be.visible').click()
    }
}

export default new Header();