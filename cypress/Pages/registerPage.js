export class register {

    WebLocators = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        phone: '#input-telephone',
        password: '#input-password',
        cnfpassword: '#input-confirm',
        privacypolicy: "input[type='checkbox']",
        submit: "input[class='btn btn-primary']"
    }

    openURL() {
        cy.visit(Cypress.env('URL'))  //this value is taken from cypress.config.js
        // cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
    }

    enterFirstName(Fname) {
        cy.get(this.WebLocators.firstName).type(Fname)

    }

    enterLastName(Lname) {
        cy.get(this.WebLocators.lastName).type(Lname)

    }

    enterEmail(Email) {
        cy.get(this.WebLocators.email).type(Email)

    }

    enterPhone(telephone) {
        cy.get(this.WebLocators.phone).type(telephone)

    }


    enterPassword(password) {
        cy.get(this.WebLocators.password).type(password)
        cy.get(this.WebLocators.cnfpassword).type(password)


    }

    enterCheckbox() {
        cy.get(this.WebLocators.privacypolicy).check()

    }

    enterSubmit() {
        cy.get(this.WebLocators.submit).type("{enter}")

    }








}