class Base {
    async maximizeWindows() {
        cy.viewport(window.screen.width, window.screen.height)
    }

    async openUrl() {
        cy.visit('https://sistemtoko.com')
        this.maximizeWindows()
    }

    async openUrlLogin() {
        cy.visit('https://sistemtoko.com/login')
        this.maximizeWindows()
    }
}

module.exports = new Base()
