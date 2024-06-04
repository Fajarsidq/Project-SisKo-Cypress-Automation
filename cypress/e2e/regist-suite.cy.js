const registPage = require('../support/page-object/register-page/register-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')
const random = require('../support/common-function/randomize')


describe("Register", () => {
    it("Valid Register", () => {
        base.openUrl()
        registPage.validRegister(data.data_register.email, data.data_register.password, data.data_register.rePassword, data.data_register.fullName, data.data_register.phone)
        registPage.verifyRegistPageAppears()
    })
})

