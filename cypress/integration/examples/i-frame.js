//cypress-Spec
///  <reference types="Cypress" />
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

//const { type } = require("cypress/types/jquery")


describe("Frames test",function()
{
    it("demo example",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()

        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        
        //ttps://rahulshettyacademy.com/AutomationPractice/
    })
    

})