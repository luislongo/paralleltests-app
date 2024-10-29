/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });

  it("displays react logo", () => {
    cy.get(".App-logo").should("be.visible");
  });
});
