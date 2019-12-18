describe('My Second Test Suit', function () {
    before(function () {
        cy.fixture('example.json').then(function (data) {
            this.data = data
        })
    })
 
    it('MyAddress Page of the Application', function () {
 
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(".form-control[name='name']").type(this.data.name);
        cy.get('#exampleFormControlSelect1').select(this.data.gender);
       
    })
})