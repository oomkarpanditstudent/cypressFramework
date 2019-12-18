 /// <reference types="Cypress" />
describe ('Test Suite',()=>{
    it ('Test Case 1',()=>{
  //https://rahulshettyacademy.com/AutomationPractice/
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/') ;
cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
cy.get('#checkBoxOption2').uncheck().should('not.be.checked').and('have.value','option2')
cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
cy.get('select').select('option2');
cy.get('input[type="checkbox"]').check(['option1','option3'])
cy.get('#autocomplete').type('Ind')
cy.get('.ui-menu-item div').each(($el,index,$list)=>{
if ($el.text()==='India'){
    $el.click();
    cy.log("Found India")
}
})

  cy.log("Managed to select")
 cy.get("#dropdown-class-example [value='option2']").click({force:true})
 // cy.log("#dropdown-class-example [value='Option2']")

    })  
})