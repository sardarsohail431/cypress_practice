class HonePage
{
    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDatabinding()
    {   
        //cy.get(':nth-child(4) > .card > .card-footer > .btn')
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender()
    {
        return cy.get('select')
    }
    getEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }
    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
        //return cy.get(':nth-child(4) > .card > .card-footer > .btn')

    }
}
export default HonePage;