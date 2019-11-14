describe('anonymous calculator', () => {
  
  it('can make calculations', () => {
    cy.visit('/')
  })

  it('realiza a soma: 5 + 5 = 10', () =>{
    
    cy.contains('C').click();
    cy.get('[data-cy=button5]').click();
    cy.get('[data-cy=buttonSum]').click();
    cy.get('[data-cy=button5]').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.contains('10');
  
  })

  
  it('realiza a subtração: 15 - 2 = 13', () =>{
    cy.contains('C').click();
    cy.get('[data-cy=button1]').click();
    cy.get('[data-cy=button5]').click();
    cy.contains('−').click();
    cy.get('[data-cy=button2]').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.contains('13');
  })

  it('realiza a multiplicação: 3 x 5 = 15', () =>{
    cy.contains('C').click();
    cy.get('[data-cy=button3]').click();
    cy.contains('×').click();
    cy.get('[data-cy=button5]').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.contains('15');
  })

  it('realiza a Divisão: 24 % 2 = 12', () =>{
    cy.contains('C').click();
    cy.get('[data-cy=button2]').click();
    cy.get('[data-cy=button4]').click();
    cy.contains('÷').click();
    cy.get('[data-cy=button2]').click();
    cy.get('[data-cy=buttonEquals]').click();
    cy.contains('12');
  })

  it('limpar operação: C', () =>{
    cy.get('[data-cy=button2]').click();
    cy.contains('C').click();
    cy.contains('0');
  })
})