//cypress-Spec
///  <reference types="Cypress" />
//import HonePage from '../pageobject/honePage'
import cypress from "cypress"
import HonePage from "../pageObject/honePage"
//const { type } = require("cypress/types/jquery")

describe("my second test suite",function()

{
    before(function()
    {
        //runs once before all tests in the block
        //data driving using fixture method
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    it("first test case",function()

    {
        const honePage=new HonePage()
        
        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //cy.visit(cypress.env('url'))
        cy.visit(cypress.env('url'))
          honePage.getEditBox().type(this.data.name)
        honePage.getGender().select(this.data.gender)
        //cy.pause()
        //honePage.getTwoWayDataBinding().should('have.attr','minlength','2')
        honePage.getEntrepreneaur().should('be.disabled')
        honePage.getShopTab().click()
    
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        });
        //productPage.checkOutButton().click()
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
        //sum of two strings
        
        const amount=$el.text()
        var res=amount.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)
        cy.log(res)
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res=amount.split(" ")
            res=res[1].trim()
            expect(Number(total)).to.equal(sum)

        })


        cy.contains('Checkout').click()
        //cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"').click()
        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        })
         
         
        
        /*cy.get('input[name="name"]:nth-child(2)').type(this.data.name)//type name :nth-child(2) is index of name block
        cy.get('select').select(this.data.gender)//static dropdown
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        //cy.pause()//to stop test from here
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.productName.forEach(function(element)
        {
            cy.selectProduct(element)
        });*/

        //cy.selectProduct('Blackberry')//custom command
        //cy.selectProduct('Nokia Edge')
        /*cy.get('h4.card-title').each(($el,index,$list)=>{
        if($el.text().includes('Blackberry'))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        })*/

         
    })
    

})