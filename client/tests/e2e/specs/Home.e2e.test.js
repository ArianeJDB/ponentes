// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Contiene los enlaces', () => {
    cy.visit('/')
    cy.contains('a', 'Ver Charlas')
    cy.contains('a', 'Ver Ponentes')
    cy.contains('a', 'Registrarse')
  })
})
