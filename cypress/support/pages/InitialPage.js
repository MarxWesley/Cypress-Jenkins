const btnVerPets = '.button'
const btnCadastrar = '[data-test="register-button"]'
const btnFazerLogin = '[data-test="login-button"]'

Cypress.Commands.add('clicarVerPets', () => {
    cy.clicking(btnVerPets)
})

Cypress.Commands.add('clicarCadastrar', () => {
    cy.clicking(btnCadastrar)
}) 

Cypress.Commands.add('clicarLogin', () => {
    cy.clicking(btnFazerLogin)
}) 