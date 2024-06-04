const locator = require('./login-locators')
const staticData = require('../static-data')

class LoginPage {


    async verifyLoginPageAppears() {
        cy.xpath(locator.data_test_id.button_login).should('exist')
        cy.xpath(locator.data_test_id.input_email).should('exist')
        cy.xpath(locator.data_test_id.input_password).should('exist')
    }

    async verifyValidLogin() {
        cy.xpath(locator.data_test_id.asser_valid_login).should('contain','Daftar Toko')
    }

    async verifyInvalidLogin() {
        cy.xpath(locator.data_test_id.asser_invalid_login).should('contain','Operation Failed')
    }

    async verifyForgotPassword() {
        cy.xpath(locator.data_test_id.assert_forgot_password).should('contain','Password Reminder')
    }

    async inputEmail(userEmail) {
        cy.xpath(locator.data_test_id.input_email).should('be.visible').type(userEmail)
    }

    async inputPassword(userPassword) {
        cy.xpath(locator.data_test_id.input_password).should('be.visible').type(userPassword)
    }

    async ForgotPasswordFeature() {
        cy.xpath(locator.data_test_id.forgot_password_button).click()
        cy.xpath(locator.data_test_id.input_Regist_email).type(staticData.data_login.invalid_email)
        cy.xpath(locator.data_test_id.send_reminder_button).click()
    }

    async clickButtonLogin() {
        cy.xpath(locator.data_test_id.button_login).click()
        cy.wait(4000)
    }
    
    async validLogin (userEmail,userPassword) {
        this.inputEmail(userEmail)
        this.inputPassword(userPassword)
        this.clickButtonLogin()
    }
    
    async invalidEmail (InvaliduserEmail,userPassword) {
        this.inputEmail(InvaliduserEmail)
        this.inputPassword(userPassword)
        this.clickButtonLogin()
    }

    async invalidPassword (userEmail,InvaliduserPassword) {
        this.inputEmail(userEmail)
        this.inputPassword(InvaliduserPassword)
        this.clickButtonLogin()
    }

    async invalidCredentials (InvaliduserEmail,InvaliduserPassword) {
        this.inputEmail(InvaliduserEmail)
        this.inputPassword(InvaliduserPassword)
        this.clickButtonLogin()
    }
    
    async ForgotPassword (userEmail,InvaliduserPassword) {
        this.inputEmail(userEmail)
        this.inputPassword(InvaliduserPassword)
        this.clickButtonLogin()
        this.ForgotPasswordFeature()
    }

}

module.exports = new LoginPage()
