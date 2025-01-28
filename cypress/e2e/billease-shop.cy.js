describe('Billease Shop Page - Search Functionality', () => {
  const url = 'https://billease.ph/shops';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should display results for a valid product search', () => {
    cy.get('input[placeholder="Search shop"]').type('Lazada{enter}')
      .wait(3000);
    cy.contains('Lazada')
      .should('exist')
      .click();
    cy.contains('Amount')
      .scrollIntoView();
    cy.get(':nth-child(3) > label > .slider')
      .invoke('val', 2000)
      .trigger('input')
      .wait(2000)
      .invoke('val', 20000)
      .trigger('input')
      .wait(2000)
      .invoke('val', 30000)
      .trigger('input')
      .wait(2000)
      .invoke('val', 40000)
      .trigger('input')
      .wait(2000);
    cy.get(':nth-child(7) > label > .slider')
      .invoke('val', 0)
      .trigger('input')
      .wait(2000);
    cy.get('.md\\:ml-10 > .flex-row > :nth-child(1)')
      .click()
      .wait(2000);
    cy.get('.md\\:ml-10 > .flex-row > :nth-child(2)')
      .click()
      .wait(2000);
    cy.get('.md\\:ml-10 > .flex-row > :nth-child(3)')
      .click()
      .wait(2000);
    cy.contains('About Lazada')
      .should('be.visible')
      .scrollIntoView()
      .wait(3000);
  });

  it('should display results for a valid product search', () => {
    cy.get('input[placeholder="Search shop"]').type('Samsung{enter}')
      .wait(2000);
    cy.contains('Samsung')
      .should('exist')
      .click();
    cy.contains('About Samsung')
      .should('be.visible')
      .scrollIntoView()
      .wait(3000);
  });

  it('should display "No result found" for invalid product search', () => {
    cy.get('input[placeholder="Search shop"]').type('InvalidProduct{enter}');
    cy.wait(2000);
    cy.contains('No result found.').should('be.visible');
  });
});
