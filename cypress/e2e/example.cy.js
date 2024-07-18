// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.green').click();
    cy.get('[href="/about"]').click();
    cy.get('[href="/"]').click();
    cy.get('.router-link-active').click();
    /* ==== End Cypress Studio ==== */
  })
})
