// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Contiene los enlaces', () => {
    cy.visit('/registration')
    cy.contains('#email').type('test@test.com')
    cy.contains('a', 'Ver Ponentes')
    cy.contains('a', 'Registrarse')
  })
})
