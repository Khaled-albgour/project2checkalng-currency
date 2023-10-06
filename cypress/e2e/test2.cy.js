/// <reference types= "cypress" />

const expectedcurrency = "SAR"
const expectedattribute = "lang"
const expectedlanguage = "en"

describe('aspire test case', () => {
  it.skip('check the currency ', () => {
    cy.visit('https://www.almosafer.com/en')

    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedcurrency)
  })
  it('check the language  ', () => {
    cy.visit('https://www.almosafer.com/en')

    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr',expectedattribute,expectedlanguage)
    
  })
  
  
})