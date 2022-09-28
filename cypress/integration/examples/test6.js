//cypress-Spec
///  <reference types="Cypress" />

//const { type } = require("cypress/types/jquery")

describe("my second test suite",function()
{
    it("first test case",function()
    {
        //handling tables
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#mousehover').invoke('show')//jquery
        cy.contains('Top').click({force: true})
        //cy.url().should('include','Top')
         
    })
    

})