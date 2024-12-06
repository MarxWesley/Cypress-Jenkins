
describe('Página de cadastro', () => {
    beforeEach (() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.get('[data-test="register-button"]').click()
    })

    it('Cadastrar usuário com campo email inválido', () => {
        cy.cadastrar('Marques', 'e','Senha123', 'e')
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains("As senhas não batem").should('be.visible')
    });

}); 