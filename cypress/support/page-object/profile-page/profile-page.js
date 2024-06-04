const locator = require('./profile-locators')

class profilePage {


    //calculate your ibm
    async verifyProfile() {
        cy.xpath(locator.data_test_id.asser_profile).should('contain','Profile Setting')

    }

    async editProfile() {
        cy.xpath(locator.data_test_id.button_profile).click()
        cy.xpath(locator.data_test_id.profile_setting).click()
        cy.xpath(locator.data_test_id.input_zipcode).clear().type('41315')
        cy.xpath(locator.data_test_id.button_update).click()
    




        
    }
    
    

}

module.exports = new profilePage()
