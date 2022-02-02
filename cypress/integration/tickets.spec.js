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

  it.only("Fills all text input fields", ()=>{
    cy.get("#first-name").type("Bruno")
    cy.get("#last-name").type("Sajermann")
    cy.get("#email").type("contato@sajermann.com")
    cy.get("#requests").type("Vegetarian")
    cy.get("#signature").type("Bruno S.")
  })

  it("Has 'Ticketbox' header's heading", ()=>{});
})