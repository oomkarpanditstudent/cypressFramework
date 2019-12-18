/// <reference types="Cypress" />
describe("Test Suite", () => {
  it("Test Case 1", () => {
    cy.visit("http://www.qaclickacademy.com/practice.php");

    cy.get("div.mouse-hover-content").invoke('show');
    cy.contains('Top').click();
  });
});
