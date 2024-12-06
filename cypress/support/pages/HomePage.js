const logoAdopet = ".header__logo";
const home = '.header__home'
const message = '.header__message'

const perfil = '.header__user';
const btnVerPerfil =  '.button'
const btnLogout = '[data-test="submit-button"]'


Cypress.Commands.add('fluxoLogout', () => {
    cy.clicking(perfil)
    cy.clicking(btnLogout)
    cy.contains('Boas-vindas!').should('be.visible')
});

Cypress.Commands.add('verPerfil', () => {
    cy.clicking(perfil)
    cy.clicking(btnVerPerfil)
    cy.contains('Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.').should('be.visible')
})