describe('anonymous logout', () => {
    
    it('logout', () => {
        cy.visit('/');
      })

    it('realizar logout', () =>{
      
        cy.visit('/');
        cy.contains('Login').click();
        cy.get('#username-input').type('abstrareal@gmail.com');
        cy.get('#password-input').type('1234');
        cy.contains('Submit').click();
        cy.contains('abstrareal@gmail.com');
        cy.contains('Logout').click();
      })

})