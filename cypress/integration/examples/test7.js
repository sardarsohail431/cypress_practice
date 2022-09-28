//cypress-Spec
///  <reference types="Cypress" />

//const { type } = require("cypress/types/jquery")

describe("my second test suite",function()
{
    it("first test case",function()
    {
        //handling child window in another tab
        //1st remove target attribute
        //2nd href attribute
        //cy.visit(url)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(e1)
        {
            const url=e1.prop('href')
            cy.log(url)
            cy.visit(url)
        })
          
    })
    

})