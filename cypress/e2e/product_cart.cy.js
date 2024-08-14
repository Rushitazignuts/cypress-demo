// describe('Product and Cart Functionality', () => {
//   it('visits the app root url', () => {
//     cy.visit('/')
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get('.input').clear('g');
//     cy.get('.input').type('grocery');
//     cy.get('.product-item > button').click();
//     cy.get('.input').click();
//     cy.get('.input').clear('h');
//     cy.get('.input').type('hello');
//     cy.get('.product-item > button').click();
//     cy.get(':nth-child(1) > .remove').click();
//     /* ==== End Cypress Studio ==== */
//   })

  
    // it('displays the list of products', () => {
    //   cy.get('.product-item').should('have.length', 1);
    //   cy.get('.product-item').first().find('.add-form').should('contain', 'Product A');
    // });
  
    // it('adds a product to the cart and updates the cart total', () => {
    //   cy.get('.product-item').first().find('button').click();
    //   cy.get('.cart').should('contain', 'Cart Total: 100');
      
    // //   cy.get('.product-item').eq(1).find('button').click();
    // //   cy.get('.cart h3').should('contain', 'Cart Total: 250');
    // });
  // });


  // cypress/e2e/product-list.cy.js

// cypress/e2e/product_cart.cy.js

describe('Product List', () => {
  beforeEach(() => {
    // Visit the page where your component is rendered
    cy.visit('/');
  });

  it('should display the initial products', () => {
    cy.get('.product-list li').should('have.length', 1);
    cy.get('.product-list li').first().contains('Product A 150');
  });

  it('should add a new product to the cart', () => {
    cy.get('.input').type('Product B');
    cy.get('button').contains('Add').click();

    cy.get('.product-list li').should('have.length', 2);
    cy.get('.product-list li').last().contains('Product B 100');
  });

  it('should update the cart total correctly', () => {
    cy.get('.input').type('Product B');
    cy.get('button').contains('Add').click();

    // Wait for the cart total to update
    cy.get('.cart h3').should('contain', 'Cart Total: 250');
  });

  it('should remove a product from the cart', () => {
    cy.get('.input').type('Product B');
    cy.get('button').contains('Add').click();

    cy.get('.product-list li').last().contains('remove').click();

    cy.get('.product-list li').should('have.length', 1);
    cy.get('.product-list li').first().contains('Product A 150');

    // Wait for the cart total to update
    // cy.get('.cart h3').should('contain', 'Cart Total: 150');
  });

  it('should display "nothing" when the cart is empty', () => {
    cy.get('.product-list li .remove').click();

    cy.get('.product-list p').should('contain', 'nothing');
    // cy.get('.cart h3').should('contain', 'Cart Total: 0');
  });
});
