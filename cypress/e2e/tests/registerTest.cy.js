import { register } from "../../Pages/registerPage"
import registerData from "../../fixtures/registerData.json"   //this fixture is used by importing

const registerobj = new register()
describe("test automation", () => {
    it('register flow', () => {
        cy.wait(2000)
        registerobj.openURL()
        registerobj.enterFirstName(registerData.firstName)
        registerobj.enterLastName(registerData.lastName)
        registerobj.enterEmail(registerData.email)
        registerobj.enterPhone(registerData.telephone)
        registerobj.enterPassword(registerData.password)
        registerobj.enterCheckbox()
        registerobj.enterSubmit()




    })
})
