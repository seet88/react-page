/// <reference types="cypress" />

describe("main page", () => {
  it("should open website", () => {
    cy.visit("/");
    cy.contains("Learn React");
  });
});
