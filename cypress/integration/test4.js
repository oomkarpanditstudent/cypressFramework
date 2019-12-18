/// <reference types="Cypress" />
describe("Test Suite", () => {
  it("Test Case 1", () => {
    //http://www.qaclickacademy.com/practice.php
   // cy.visit("http://https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit("http://www.qaclickacademy.com/practice.php");

    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    cy.on("window:confirm", str => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    cy.on("window:alert", str => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("#alertbtn").click();
    cy.get("[value=Confirm]").click();
    cy.get('#opentab').invoke('removeAttr','target').click();
    cy.url().should('include','qaclickacademy')
    cy.go('back');
    cy.url().should('include','practice')
    //cy.get('#opentab').click();
    
})  


});