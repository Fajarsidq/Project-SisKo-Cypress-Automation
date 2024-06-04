const staticData = require('../static-data')
const locator = require('./toko-locators')

class productPage {


    
    async loginToko () {
        cy.xpath(locator.data_test_id.button_login_toko).click()
        cy.xpath(locator.data_test_id.icon_burger).click()

    }

    async addProduct () {
        cy.xpath(locator.data_test_id.select_product_page).click()
        cy.xpath(locator.data_test_id.button_data_baru).click()
        cy.xpath(locator.data_test_id.input_tambah_stok).type(staticData.data_product.  restock)
        cy.xpath(locator.data_test_id.button_buat_product_baru).click()
        cy.xpath(locator.data_test_id.nama_product).type(staticData.data_product.nama_product)
        cy.xpath(locator.data_test_id.kode_product).type(staticData.data_product.kode_product)
        cy.xpath(locator.data_test_id.harga_beli).type(staticData.data_product.harga_beli)
        cy.xpath(locator.data_test_id.harga_jual).type(staticData.data_product.harga_jual)
        cy.xpath(locator.data_test_id.berat_product).type(staticData.data_product.berat_product)
        cy.xpath(locator.data_test_id.keyword).type(staticData.data_product.keyword)
        cy.xpath(locator.data_test_id.button_submit).click()
    }    

    async addCustomer () {
        cy.xpath(locator.data_test_id.select_sales_page).click()
        cy.xpath(locator.data_test_id.button_new_product).click()
        cy.wait(3000)
        cy.xpath(locator.data_test_id.tab_customer).click()
        cy.xpath(locator.data_test_id.button_new).click()
        cy.xpath(locator.data_test_id.cutomer_name).type(staticData.data_customer.name)
        cy.xpath(locator.data_test_id.cutomer_no_telp). type(staticData.data_customer.no_telp)
        cy.xpath(locator.data_test_id.customer_alamat).type(staticData.data_customer.alamat)
        cy.xpath(locator.data_test_id.customer_email).type(staticData.data_customer.email)
        cy.xpath(locator.data_test_id.customer_wa).type(staticData.data_customer.wa)
        cy.xpath(locator.data_test_id.customer_bbm).type(staticData.data_customer.BBM)
        cy.xpath(locator.data_test_id.customer_deposit).type(staticData.data_customer.deposit)
        cy.xpath(locator.data_test_id.customer_keyword).type(staticData.data_customer.keyword)
        cy.xpath(locator.data_test_id.button_submit_cust).click()
    }

}

module.exports = new productPage()
