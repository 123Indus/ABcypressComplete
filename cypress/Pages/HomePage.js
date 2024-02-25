import 'cypress-xpath'
export class HomePage {

    weblocators = {
        Search_input: "input[class='form-control input-lg']",
        click_search: "button[class='btn btn-default btn-lg']",
        product: "img[title='MacBook']",
        addtoCart: "//div[contains(@class,'button-group')]",
        successMessage: "div[class='alert alert-success alert-dismissible']"

    }

    searchProduct(productName) {
        cy.get(this.weblocators.Search_input).type(productName)
        cy.get(this.weblocators.click_search).click()

    }

    addToCart() {

        cy.xpath(this.weblocators.addtoCart).first().click()

    }

    verifySuccessMessage() {
        return cy.get(this.weblocators.successMessage)
    }


}