const LoginPage = require('../support/page-object/login-page/login-page')
const productPage = require('../support/page-object/toko-page/toko-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')


describe("PRODUCT", () => {
    beforeEach(() => {
        base.openUrlLogin()
        LoginPage.validLogin(data.data_register.email, data.data_register.password)
        LoginPage.verifyValidLogin()
    })
    it("Verify user add product", () => {
        productPage.loginToko()
        productPage.addProduct()

    })

    it("Verify user add customer", () => {
        productPage.loginToko()
        productPage.addCustomer()

    })
    
})