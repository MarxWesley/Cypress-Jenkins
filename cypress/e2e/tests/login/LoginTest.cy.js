describe('Página de login', ()=> {

    beforeEach(()=> {
        cy.visit('/login');
        cy.generateFakerLogin();
    })

    it('test 1 - Validar tentativa de login com dados dinâmicos inválidos', ()=> {
        cy.fixture('loginFaker').then((dados) => {
            cy.fazerLoginInvalido(dados);
        })
    });

    it('test 2 - Validar tentativa de login com dados válidos', () => {
        cy.fixture('loginValido').then((dados) => {
            cy.fazerLoginValido(dados);
            cy.contains('Olá! Veja os amigos disponíveis para adoção!').should('be.visible')
        })
    });
    
    it('test 3 - Validar tentativa de login com senha inválida', () => {
        cy.fixture('loginValido').then((dados) => {
            cy.fazerLoginSenhaInvalida(dados);
        })
    });

    it('test 4 - Validar tentativa de login com email inválido', () => {
        cy.fixture('loginValido').then((dados) => {
            cy.fazerLoginEmailInvalido(dados);
        })
    });

    it('test 5 - Validar toggle exibir senha', () => {
        cy.get('[data-test="input-loginPassword"]').type('Senha123')
        cy.get('.pass__view').click()
    });
    
    it.only('test 6 - Validar logar na conta válida e logo em seguida deslogar', () => {
        cy.fixture('loginValido').then((dados) => {
            cy.fazerLoginValido(dados);
            cy.contains('Olá! Veja os amigos disponíveis para adoção!').should('be.visible')
        })
        cy.fluxoLogout()
    });
})                   