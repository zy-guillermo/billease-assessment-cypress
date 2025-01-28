describe('Billease Shop Page - Search Functionality', () => {
  const url = 'https://billease.ph/shops';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should display results for a valid product search', () => {
    cy.get('input[placeholder="Search shop"]').type('Lazada{enter}');
    cy.wait(2000);
    cy.contains('Lazada').should('exist');
  });

  it('should display results for a valid product search', () => {
    cy.get('input[placeholder="Search shop"]').type('Samsung{enter}');
    cy.wait(2000);
    cy.contains('Samsung').should('exist');
  });

  it('should display "No result found" for invalid product search', () => {
    cy.get('input[placeholder="Search shop"]').type('InvalidProduct{enter}');
    cy.wait(2000);
    cy.contains('No result found.').should('be.visible');
  });
});
