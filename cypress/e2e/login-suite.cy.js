const LoginPage = require('../support/page-object/login-page/login-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')


describe("Login", () => {
    beforeEach(() => {
        base.openUrlLogin()
    })
    it("Verify user login with registered credentials", () => {
        LoginPage.validLogin(data.data_register.email, data.data_register.password)
        LoginPage.verifyValidLogin()
    })

    it("Verify user login with invalid Email", () => {
        LoginPage.invalidEmail(data.data_login.invalid_email, data.data_register.password)
        LoginPage.verifyLoginPageAppears()
        LoginPage.verifyInvalidLogin()
    })

    it("Verify user login with invalid Password", () => {
        LoginPage.invalidPassword(data.data_register.email, data.data_login.invalid_password)
        LoginPage.verifyInvalidLogin()
        LoginPage.verifyLoginPageAppears()
    })

    it("Verify user login with Invalid credentials", () => {
        LoginPage.invalidCredentials(data.data_login.invalid_email, data.data_login.invalid_password)
        LoginPage.verifyInvalidLogin()
        LoginPage.verifyLoginPageAppears()
    })

    it("Verify user login with Forgot Password", () => {
        LoginPage.ForgotPassword(data.data_register.email, data.data_login.invalid_password)
        LoginPage.verifyForgotPassword()
    })
})

