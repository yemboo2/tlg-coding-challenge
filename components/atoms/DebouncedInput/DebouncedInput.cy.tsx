import React from 'react';
import Input from './DebouncedInput';

describe('<Input />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Input />);
  });

  it('should call searchFunc when keyup', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy');
    cy.mount(<Input searchFunc={onChangeSpy} />);
    cy.get('input').type('t');
    cy.wait(1100);
    cy.get('@onChangeSpy').should('not.have.been.called');
    cy.get('input').type('es');
    cy.wait(1100);
    cy.get('@onChangeSpy').should('have.been.calledWith', 'tes');
    cy.get('input').type('t');
    cy.get('@onChangeSpy').should('not.have.been.calledAfter', 'tes');
    cy.get('input').type('123');
    cy.wait(1100);
    cy.get('@onChangeSpy').should('have.been.calledWith', 'test123');
  });
});
