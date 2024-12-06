describe('Página de login', ()=> {

    beforeEach(()=> {
        cy.visit('/login');
        cy.generateFakerLogin();
    })

    it('test 1 - Tentativa de login com dados dinâmicos inválidos', ()=> {
        cy.fixture('loginFaker').then((dados) => {
            cy.fazerLoginInvalido(dados);
        })
    });

    it('test 2 - Fazer login com dados chumbados válidos', () => {
        cy.fixture('loginValido').then((dados) => {
            cy.fazerLoginValido(dados);
            cy.contains('Olá! Veja os amigos disponíveis para adoção!').should('be.visible')
        })
    });
    
                   
})                   