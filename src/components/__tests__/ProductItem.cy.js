import ProductItem from '../ProductItem.vue';

describe('ProductItem Component', () => {
  it('renders a product item', () => {
    const product = { name: 'Product A', price: 100 };
    cy.mount(ProductItem, {
      props: { product }
    });
    cy.get('.add-form').should('be.visible')
    // cy.get('li').should('contain', 'Product A');
    // cy.get('p').should('contain', '100');
  });

  it('emits add-to-cart event when Add to Cart button is clicked', () => {
    const product = { name: 'Product A', price: 100 };
    cy.mount(ProductItem, {
      props: { product },
      listeners: {
        'add-to-cart': cy.spy().as('add-to-cart')
      }
    });

  });
});
