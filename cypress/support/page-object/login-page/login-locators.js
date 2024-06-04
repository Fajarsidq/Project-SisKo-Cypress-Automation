module.exports = {
    data_test_id: {
        tab_login: '(//button[normalize-space()="Login"])[1]',
        input_email : '//input[@name="email"]',
        input_password : '//input[@name="password"]',
        button_login : '//button[@type="submit"]',
        forgot_password_button: '//a[normalize-space()="I forgot my password"]',
        input_Regist_email : '//input[@placeholder="Enter Your Registered E-Mail"]',
        send_reminder_button : '//input[@value="Send Reminder"]',
        asser_valid_login :'//h2[@class="panel-title"]',
        asser_invalid_login : '//span[@id="title"]',
        assert_forgot_password : '//h3[normalize-space()="Password Reminder"]'
    }
}