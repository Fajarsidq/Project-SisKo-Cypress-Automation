const locator = require('./register-locators')

class homePage {


    //calculate your ibm
    async verifyRegistPageAppears() {
        cy.xpath(locator.data_test_id.input_email).should('exist')
        cy.xpath(locator.data_test_id.input_full_name).should('exist')
        cy.xpath(locator.data_test_id.input_password).should('exist')
        cy.xpath(locator.data_test_id.input_re_password).should('exist')
        cy.xpath(locator.data_test_id.input_phone).should('exist')
    }

    async clickButtonRegist () {
        cy.xpath(locator.data_test_id.button_register).click()
    }

    async inputEmail(userEmail) {
        cy.xpath(locator.data_test_id.input_email).type(userEmail)
    }

    async inputPassword(userPassword) {
        cy.xpath(locator.data_test_id.input_password).type(userPassword)
    }

    async inputRePassword(userRePassword) {
        cy.xpath(locator.data_test_id.input_re_password).type(userRePassword)
    }
    
    async inputFullName(userFullName) {
        cy.xpath(locator.data_test_id.input_full_name).type(userFullName)
    }

    async inputPhone(userPhone) {
        cy.xpath(locator.data_test_id.input_phone).type(userPhone)
    }
    
    async clickButtonSubmit() {
        cy.xpath(locator.data_test_id.submit_button).click()
    }
    
    async validRegister(userEmail,userPassword,userRePassword,userFullName,userPhone) {
        this.clickButtonRegist()
        this.inputEmail(userEmail)
        this.inputPassword(userPassword)
        this.inputRePassword(userRePassword)
        this.inputFullName(userFullName)
        this.inputPhone(userPhone)
        this.clickButtonSubmit()
    }

    //free trial

    async inputFistName (first_name) {
        cy.xpath(locator.data_test_id.input_fist_name).type(first_name)
    }

    async inputLastName(last_name) {
        cy.xpath(locator.data_test_id.input_last_name).type(last_name)
    }

    async inputBirthday(birthday) {
        cy.xpath(locator.data_test_id.input_birthday).type(birthday)
    }
    
    async inputEmail(email) {
        cy.xpath(locator.data_test_id.input_email).type(email)
    }

    async inputLandlineNumber(landline) {
        cy.xpath(locator.data_test_id.input_landline).type(landline)
    }

    async inputMobilePhone(mobile) {
        cy.xpath(locator.data_test_id.input_phone_number).type(mobile)
    }
    
    async clickSendButton() {
        cy.xpath(locator.data_test_id.send_button).click()
    }

    async clickFreeTrial() {
        cy.xpath(locator.data_test_id.free_trial_menu).click()
    }   
    
    async FreeTrial(first_name,last_name,birthday,email,landline,mobile) {
        this.clickFreeTrial()
        this.inputFistName(first_name)
        this.inputLastName(last_name)
        this.inputBirthday(birthday)
        this.inputEmail(email)
        this.inputLandlineNumber(landline)
        this.inputMobilePhone(mobile)
        this.clickCalculateButton()
    }

}

module.exports = new homePage()
