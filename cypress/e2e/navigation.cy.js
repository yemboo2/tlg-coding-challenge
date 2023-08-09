/// <reference types="cypress" />

describe('navigation tests', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should navigation to add page and go back via browser', () => {
    cy.url().should('not.include', 'add');

    cy.get('button').should('exist').click();

    cy.url().should('include', 'add');
    cy.go('back');
    cy.url().should('not.include', 'add');
  });

  it('should navigation to add page and go back via button', () => {
    cy.get('button').should('exist').click();

    cy.url().should('include', 'add');
    cy.get('button').first().next().should('have.text', '< Back').click();
    cy.url().should('not.include', 'add');
  });
});
