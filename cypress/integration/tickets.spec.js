/// <reference types="cypress" />


Cypress.on(
	'uncaught:exception',
	() =>
		// returning false here prevents Cypress from
		// failing the test
		false
);

describe("Tickets", () => {
  beforeEach(() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'));

  it("Fills all text input fields", ()=>{
    cy.get("#first-name").type("Bruno")
    cy.get("#last-name").type("Sajermann")
    cy.get("#email").type("contato@sajermann.com")
    cy.get("#requests").type("Vegetarian")
    cy.get("#signature").type("Bruno S.")
  })

  it("Select two tickets", ()=>{
    cy.get("#ticket-quantity").select(2)
  })

  it("Select vip ticket type", ()=>{
    cy.get("#vip").check()
  })

  it("Select social media checkbox", ()=>{
    cy.get("#social-media").check()
  })

  it("Select friend and publication, then unckeck friend", ()=>{
    cy.get("#friend").check()
    cy.get("#publication").check()
    cy.get("#friend").uncheck()
  })

  it("Has 'Ticketbox' header's heading", ()=>{
    cy.get('header h1').should('contain', 'TICKETBOX')
  });

  it.only("Alert on invalid email", ()=>{
    cy.get('#email').as('email').type('ashudhas');
    cy.get('#email.invalid').should('exist');

    cy.get('@email').clear().type("teste@gmail.com")
    cy.get('#email.invalid').should('not.exist');
  });
})