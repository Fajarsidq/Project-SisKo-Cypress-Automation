const LoginPage = require('../support/page-object/login-page/login-page')
const ProfilePage = require('../support/page-object/profile-page/profile-page')
const base = require('../support/page-object/base')
const data = require('../support/page-object/static-data')


describe("PROFILE", () => {
    before(() => {
        base.openUrlLogin()
    })
    it("Verify user updated profile", () => {
        LoginPage.validLogin(data.data_register.email, data.data_register.password)
        LoginPage.verifyValidLogin()
        ProfilePage.editProfile()
        ProfilePage.verifyProfile()

    })
})