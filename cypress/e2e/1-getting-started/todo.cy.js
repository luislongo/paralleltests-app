/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });

  it("displays react logo", () => {
    cy.get(".App-logo").should("be.visible");
  });
});
