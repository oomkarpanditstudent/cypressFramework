/// <reference types="Cypress" />
describe("Test Suite", () => {
  it("Test Case 1", () => {
    //http://www.qaclickacademy.com/practice.php
    // cy.visit("http://https://rahulshettyacademy.com/AutomationPractice/");
    cy.visit("http://www.qaclickacademy.com/practice.php");

    /*cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      // cy.log($el.text());
      const courses = $el.text();
      if (
        courses.includes("Master Selenium Automation in simple Python Language")
      ) {
        $el.next("td").text();
        cy.log($el.next("td").text());
        const cost = $el.next("td").text();
        expect(cost).to.equal("25");
      }
    });
  */
    cy.get('#mousehover').invoke('show') 
    cy.contains('Top').click();
    
    
      //if (Cypess.dom.isVisible($el)) // true)
      //$el.click();
    //})



  });
});
