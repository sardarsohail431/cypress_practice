//cypress-Spec
///  <reference types="Cypress" />

//const { type } = require("cypress/types/jquery")

describe("my second test suite",function()
{
    it("first test case",function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get act like find element of selenium
        //cy.get('.product:visible').should ('have.length',4)
        //parent child chaining
        cy.get('.products').as('productlocator')
        //cy.get('@productlocator').find('.product').should('have.length',4)
        //cy.get(':nth-child(3) > .product-name').click()

        //cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

//dynamically clicking on product.
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
         
        const testveg=$el.find('h4.product-name').text()
        if(testveg.includes('Cashews'))
        {
            cy.wrap($el).find('button').click()
        }
        })

        cy.get('.cart-icon > img')
        cy.get('.cart-preview > .action-block > button').click()
        
        cy.contains('Place order').click()





        //cy.get('.search-box__button--1oH7')
        //fixture
        //assert if logo text is correctly displayed
        /*cy.get('.brand').should('have.text','GREENMART')
        //this is to print in logs
        cy.get('.brand').then(function(logo)
    {
        cy.log(logo.text())
    })*/ 
    })
    

})