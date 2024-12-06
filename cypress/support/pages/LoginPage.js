import { faker } from "@faker-js/faker";

const email = '[data-test="input-loginEmail"]';
const password = '[data-test="input-loginPassword"]';;

const forgotPassword  = '//*[@id="root"]/main/section/form/a[1]';
const enterLogin = '[data-test="submit-button"]';

const error =  '.error'

Cypress.Commands.add('fazerLoginValido', (dados) => {
    cy.fill(email, dados.email)
    cy.fill(password, dados.password)
    cy.clicking(enterLogin)
})


Cypress.Commands.add('fazerLoginInvalido', (dados) => {
    cy.fill(email, dados.email)
    cy.fill(password, dados.password)
    cy.clicking(enterLogin)
    cy.validText(error, 'Falha no login. Consulte suas credenciais.')
})

Cypress.Commands.add('generateFakerLogin', () => {
    cy.writeFile('cypress/fixtures/loginFaker.json', {
        'email':faker.internet.email(),
        'password':faker.internet.password()
    })
})