class Header {
    clickHeaderLink(linkText, headerActive=false){
        cy.get(`[data-qa="el:${linkText}Header active:${headerActive}"]`).click()
    }
    clickCategoryLink(categoryText){
        cy.get('[data-qa="el:adminableCategoryText"]').contains(categoryText).click()
    }
}

export default new Header();