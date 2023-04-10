describe('Sick Trick flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'trick' })
    .visit('http://localhost:3000')
  });

  it('should show a header, a form with 4 inputs and a submit button, and a trick card', () => {
    cy.get('h1')
      .contains('Sick Trick Wish List')
    .get('form')
    .get('[name="stance"]')
    .get('[name="trick name"]')
    .get('[name="obstacle"]')
    .get('[name="tutorial"]')
    .get('[type="submit"]')
    .get('.trick-card')
      .should('contain', 'p')
      .should('contain', 'a')
  });

  it('should reflect the data put into the form in the inputs values', () => {
      cy.get('[name="stance"]').select('Regular')
        .get('[name="stance"]').should('have.value', 'Regular')
      .get('[name="trick name"]').type('Kickflip')
        .get('[name="trick name"]').should('have.value', 'Kickflip')
      .get('[name="obstacle"]').select('Flatground')
        .get('[name="obstacle"]').should('have.value', 'Flatground')
      .get('[name="tutorial"]').type('https://www.youtube.com')
        .get('[name="tutorial"]').should('have.value', 'https://www.youtube.com')
  });

  it('should be able to add a new trick', () => {
    cy.get('[name="stance"]').select('Regular')
    .get('[name="trick name"]').type('Kickflip')
    .get('[name="obstacle"]').select('Flatground')
    .get('[name="tutorial"]').type('https://www.youtube.com')
    .get('[type="submit"]').click()

    .get('.trick-container > :nth-child(2) > .trick-name').should('contain', 'Regular Kickflip')
    .get('.trick-container > :nth-child(2) > .trick-obs').should('contain', 'Flatground')
    .get('.trick-container > :nth-child(2) > a').should('contain', 'https://www.youtube.com');
  })
})