
describe('Página de cadastro', () => {
    beforeEach (() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
    })

    it('Cadastrar usuário com todos os campos válidos', () => {
        cy.get('[data-test="register-button"]').click()
        cy.get('[data-test="input-name"]').type('Marques')
        cy.get('[data-test="input-email"]').type('marques@email.com')
        cy.get('[data-test="input-password"]').type('Senha123')
        cy.get('[data-test="input-confirm-password"]').type('Senha123')
        cy.contains('button', 'Cadastrar').click()
    });

    it.only('Clica em botao ver pets disponiveis para adocao', () => {
        cy.get('.button').click()
    });
    
});
