import { HomePage } from "../../Pages/HomePage"
import testData from '../../fixtures/testData.json'


const homepageobj = new HomePage()
describe("test automation", () => {

    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it("Add to cart Flow", () => {

        homepageobj.searchProduct(testData.product.productName)
        homepageobj.addToCart()
        homepageobj.verifySuccessMessage().should('contain', testData.message).and('contain', testData.product.productName)
        // cy.log(homepageobj.verifySuccessMessage().contains("Success: You have added MacBook to your shopping cart!"))


    })
})