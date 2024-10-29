/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays react logo", () => {
    cy.get(".App-logo").should("be.visible");
  });
});
