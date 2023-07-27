describe('Login with valid credentials', () => {
  it('validate the normal login use', () => {
    cy.visit('https://demoblaze.com/');

    cy.get('#login2')
    .click();
    cy.get('#loginusername').type('name');
    cy.get('#loginpassword').type('name');
  })
})