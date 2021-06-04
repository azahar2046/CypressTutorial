/// <reference types="Cypress"/>

describe("contact us form", () => {

      it("happy path", () => {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type("azaharuddin")
            cy.get('[name="last_name"]').type("mohammed")
            cy.get('[name="email"]').type("azahar2046@gmail.com")
            cy.get('[name="message"]').type("This is a comment")
            cy.get('#form_buttons').contains('SUBMIT').click()
            
      })

})