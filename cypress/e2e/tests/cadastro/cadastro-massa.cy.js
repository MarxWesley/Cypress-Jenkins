import { usuarios } from "../../../fixtures/usuarios.json";

describe('Página de cadastro', () => {
    beforeEach (() => {
        cy.visit("https://adopet-frontend-cypress.vercel.app/")
        cy.get('[data-test="register-button"]').click()
    })

    usuarios.map((usuario) => {
        it('Deve preecnher os campos do formulário corretamente para cadastrar', () => {
            cy.get('[data-test="input-name"]').clear().type(usuario.name)
            cy.get('[data-test="input-email"]').clear().type(usuario.email)
            cy.get('[data-test="input-password"]').clear().type(usuario.password)
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password)
            cy.contains('button', 'Cadastrar').click()
        });
    })

});
