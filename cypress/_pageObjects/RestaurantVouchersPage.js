class RestaurantVouchersPage {
    get locationInput() { return cy.get('[data-qa="el:locationDropdown enabled:true"]') }
    get peopleDropdown() { return cy.get('[data-qa="el:peopleDropdown"]') }
    get findRestaurantsVouchersButton() { return cy.get('[data-qa="el:findRestaurantsVoucherButton"]') }
    get getVoucherCodeButton() { return cy.get('[data-qa="el:offerPrimaryButton"]') }

    getNumberOfVouchersDisplayed(){
        this.getVoucherCodeButton.its('length').then((numberOfVouchers) => cy.wrap(numberOfVouchers).as('numberOfVouchers'))
    }

    searchOffers(location, numberOfPeople){
        this.getNumberOfVouchersDisplayed()
        this.findRestaurantsVouchersButton.should('be.disabled')
        this.locationInput.should('be.visible').type(location).wait(1000).type('{downarrow}').type('{enter}') //Needed to wait a second for the google autocomplete to return the location
        this.peopleDropdown.should('be.visible').select(numberOfPeople.toString())
        this.findRestaurantsVouchersButton.should('be.enabled').click()
        this.verifySearchSuccessful()
    }

    verifySearchSuccessful(){
        cy.url().should('contain',`${Cypress.env('baseUrl')}/restaurant-vouchers/search?`) //Confirm url updated to include search query
        cy.get('@numberOfVouchers').then((numberOfVouchersBeforeSearch) => this.getVoucherCodeButton.its('length').should('not.equal',numberOfVouchersBeforeSearch)) // Check that number of vouchers displayed is different before and after search to determine that the search did execute and displayed a different set of vouchers
    }
}

export default new RestaurantVouchersPage();
