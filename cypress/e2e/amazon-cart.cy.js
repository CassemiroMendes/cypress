import { faker } from '@faker-js/faker/locale/en';


describe('Adding Itens to Shopping Cart', () => {
  it('Adding two itens from home screen', () => {
    let productname = 'ZIUMIER Gaming Headset with Microphone, Compatible with PS4 PS5 Xbox One PC Laptop, Over-Ear Headphones with LED RGB Light, Noise Canceling Mic, 7.1 Stereo Surround Sound';    
    let shortproductname = 'ZIUMIER Gaming Headset with Microphone, Compatible with PS…'
    let shortproductname2 = 'Xbox Series S – 512GB SSD All-Digital Gaming Console – 1440p…'
    let productname2 = 'Xbox Series S – 512GB SSD All-Digital Gaming Console – 1440p Gaming – 4K Streaming – Robot White'
    cy.visit('https://www.amazon.com/ref=nav_bb_logo');

    cy.get('#desktop-grid-1').contains('Headsets').click();
    cy.get('*[class^="sg-col-inner"]').contains(productname).click();
    cy.get('#add-to-cart-button').click();
    cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').contains('Added to Cart');
    cy.get('#sw-gtc').contains('Go to Cart').click();
    cy.get('*[class^="a-truncate-cut"]').contains(shortproductname);
    cy.get('#nav-logo').click();
    cy.get('#twotabsearchtextbox').type('xbox');
    cy.get('#nav-search-submit-text').click();
    cy.get('*[class^="sg-col-inner"]').contains(productname2).click();
    cy.get('*[class^="a-button-inner"]').contains('Add to Cart').click();
    cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').contains('Added to Cart');
    cy.get('#sw-gtc').contains('Go to Cart').click();
    cy.get('*[class^="a-truncate-cut"]').contains(shortproductname);
    cy.get('*[class^="a-truncate-cut"]').contains(shortproductname);
  })
})