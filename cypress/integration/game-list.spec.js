/// <reference types="cypress" />
context('Games List', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('should filter list on player count selection', () => {

    cy.get('.mat-form-field')
      .should('have.value', '');

    cy.get('.mat-card')
      .its('length') 
      .should('eq', 19);
      
    cy.get('.mat-form-field')
      .first()
      .click();

    cy.get('.mat-select-panel')
      .should('exist');

    cy.get('.mat-select-panel .mat-option .mat-option-text')
      .contains('2 pessoas')
      .click();

    cy.get('.mat-card')
      .its('length') 
      .should('eq', 10);
  })

  it('should filter list on duration selection', () => {

    cy.get('.mat-form-field')
      .should('have.value', '');

    cy.get('.mat-card')
      .its('length') 
      .should('eq', 19);
      
    cy.get('.mat-form-field')
      .last()
      .click();

    cy.get('.mat-select-panel')
      .should('exist');

    cy.get('.mat-select-panel .mat-option .mat-option-text')
      .contains('Jogo rápido!')
      .click();

    cy.get('.mat-card')
      .its('length') 
      .should('eq', 4);
  })

  it('should filter list on both players count and duration selection', () => {

    cy.get('.mat-form-field')
      .should('have.value', '');

    cy.get('.mat-card')
      .its('length') 
      .should('eq', 19);
      
    cy.get('.mat-form-field')
      .first()
      .click();

    cy.get('.mat-select-panel .mat-option .mat-option-text')
      .contains('2 pessoas')
      .click();
      
    cy.get('.mat-form-field')
      .last()
      .click();

    cy.get('.mat-select-panel .mat-option .mat-option-text')
      .contains('Jogo rápido!')
      .click();

    cy.get('.mat-card')
      .its('length') 
      .should('eq', 2);
  })
})
