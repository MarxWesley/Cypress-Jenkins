
Cypress.Commands.add('fill', (selector, type) => {
    cy.get(selector).type(type)
});

Cypress.Commands.add('clicking', (selector) => {
    cy.get(selector).click({force:true})
});

Cypress.Commands.add('validText', (selector, textoEsperado) => {
    cy.get(selector).should('have.text', textoEsperado);
});

Cypress.Commands.add('setToken', () => {
    const token = Cypress.env('authorization');
    window.localStorage.setItem('authToken', token);
});