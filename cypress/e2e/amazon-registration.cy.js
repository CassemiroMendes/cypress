import { faker } from '@faker-js/faker/locale/en';


describe('Registration Amazon before Captcha', () => {
  it('Inserting Faker data to registration', () => {
    let fullname = faker.person.fullName();
    let password = faker.internet.password();
    let email = faker.internet.exampleEmail();
    cy.visit('https://www.amazon.com');

    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#createAccountSubmit').click();
    cy.get('#ap_customer_name').type(fullname);
    cy.get('#ap_password').type(password);
    cy.get('#ap_password_check').type(password);
    cy.get('#ap_email').type(email);
    cy.get('#continue').click();
    cy.get('*[class^="a-box"]').contains('Solve this puzzle to protect your account')
  })
})