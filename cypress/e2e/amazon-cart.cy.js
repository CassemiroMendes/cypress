

describe('Adding Itens to Shopping Cart', () => {
  it('Adding one item from home screen', () => {
    let productname = 'ZIUMIER Gaming Headset with Microphone, Compatible with PS4 PS5 Xbox One PC Laptop, Over-Ear Headphones with LED RGB Light, Noise Canceling Mic, 7.1 Stereo Surround Sound';
    let shortproductname = 'ZIUMIER Gaming Headset with Microphone, Compatible with PS…'
    cy.visit('/ref=nav_bb_logo');

    cy.get('#desktop-grid-1').contains('Headsets').click();
    cy.get('*[class^="sg-col-inner"]').contains(productname).click();
    cy.get('#add-to-cart-button').click();
    cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').contains('Added to Cart');
    cy.get('#sw-gtc').contains('Go to Cart').click();
   // cy.get('*[class^="a-truncate-cut"]').contains(shortproductname);
  })
})

describe('Adding Item with the search box to Shopping Cart', () => {
  it('Adding one item from search box', () => {

    let shortproductname = 'Xbox Series S – 512GB SSD All-Digital Gaming Console – 1440p…'
    let productname = 'Xbox Series S – 512GB SSD All-Digital Gaming Console – 1440p Gaming – 4K Streaming – Robot White'
    cy.visit('/ref=nav_bb_logo');

    cy.get('#twotabsearchtextbox').type('xbox');
    cy.get('#nav-search-submit-text').click();
    cy.get('*[class^="sg-col-inner"]').contains(productname).click();
    cy.get('*[class^="a-button-inner"]').contains('Add to Cart').click();
    cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').contains('Added to Cart');
    cy.get('#sw-gtc').contains('Go to Cart').click();
    cy.get('*[class^="a-truncate-cut"]').contains(shortproductname);
    cy.get('*[class^="a-truncate-cut"]').contains(shortproductname);
  })
})