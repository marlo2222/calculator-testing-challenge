describe('anonymous register', () => {
   
    it('register', () => {
      cy.visit('/');
    })

    it('email and password required', () => {
      cy.visit('/');
      cy.contains('Register').click();
      cy.get('#username-input').invoke('val').should('not.have.value', '');
      cy.get('#password-input').invoke('val').should('not.have.value', '');
    })

    it('email required', () => {
      cy.visit('/');
      cy.contains('Register').click();
      cy.get('#password-input').type('1234');
      cy.get('#username-input').invoke('val').should('not.have.value', '');
    })

    it('password required', () => {
      cy.visit('/');
      cy.contains('Register').click();
      cy.get('#username-input').type('abstrareal@gmail.com');
      cy.get('#password-input').invoke('val').should('not.have.value', '');
    })
    it('register user', () =>{
        cy.visit('/');
        cy.contains('Register').click();
        cy.get('#username-input').type('marlo@gmail.com');
        cy.get('#password-input').type('1234');
        cy.contains('Submit').click();
        cy.contains('marlo@gmail.com');
    })

    

  })