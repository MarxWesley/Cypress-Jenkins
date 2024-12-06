describe('Home page', () => {
    beforeEach(()=>{
        cy.visit('/login')
        cy.fixture('loginValido').then((dados) => {
            cy.fazerLoginValido(dados)
        })
        
    })

    it('teste 1 - logar e ir ate ver perfil e entao validar', () => {
        cy.verPerfil()
        cy.url().should('eq', `${Cypress.config("baseUrl")}/perfil`)
    });
    
});
