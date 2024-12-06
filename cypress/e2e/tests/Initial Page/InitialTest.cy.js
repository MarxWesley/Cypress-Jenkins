describe('Página inicial', () => {
    beforeEach(()=> {
        cy.visit('/');
    })

    it('test 1 - validar página home, após clicar em ver pets', () => {
        cy.clicarVerPets()
        cy.contains('Olá! Veja os amigos disponíveis para adoção!').should('be.visible')
    });

    it('test 2 - validar página cadastrar, após clicar cadastrar', () => {
        cy.clicarCadastrar()
        cy.contains('Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:').should('be.visible')
        cy.url().should('eq', `${Cypress.config("baseUrl")}/cadastro`)
    });

    it('test 3 - validar página login, após clicar em fazer login', () => {
        cy.clicarLogin()
        cy.contains('Já tem conta? Faça seu login:').should('be.visible')
        cy.url().should('eq', `${Cypress.config("baseUrl")}/login`)
    });
    
});
