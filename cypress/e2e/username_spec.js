describe('anonymous display username', () => {
   
    it('username display', () => {
        cy.visit('/');
      })

    it('Exibir o nome do usuario autenticado', () =>{
        cy.visit('/');
        cy.contains('Login').click();
        cy.get('#username-input').type('abstrareal@gmail.com');
        cy.get('#password-input').type('1234');
        cy.contains('Submit').click();
        cy.contains('abstrareal@gmail.com');
    })

})