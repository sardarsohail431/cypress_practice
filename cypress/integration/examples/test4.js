//cypress-Spec
///  <reference types="Cypress" />

//const { type } = require("cypress/types/jquery")

describe("my second test suite",function()
{
    it("first test case",function()
    {
        //check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str)=>
        {   
            //Mocha
            //expect(str).to.equal('Hello, share this practice page and share your knowledge')

        })
       /* cy.on('window:confirm ',(str)=>
        {   
            //Mocha
            expect(str).to.equal('Hello, confirm?')
        
        })*/
        //open new tab in same page
        cy.get('#opentab').invoke('removeAttr','target').click()
        //url check 
        //cy.url().should('include','qaclickacademy')
        //go to previous page 
        cy.go('back') 



         
    })
    

})