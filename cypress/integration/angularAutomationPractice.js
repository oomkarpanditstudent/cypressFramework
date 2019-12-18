describe ('Test Suite: Angular TS #1',function(){
    
    it ('Test Case Angular TC #1',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(".form-control[name='name']").type(this.data.name);
        cy.get('#exampleFormControlSelect1').select(this.data.gender);
        cy.get("h4 input[name='name']").should('have.value',this.data.name);
        cy.contains('Shop').click();
        this.data.productName.forEach(function(element){
          cy.log(element);
          cy.selectProduct(element);
        })
        cy.get('.nav-link.btn.btn-primary').click();
        var total=0;

        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
            // total +=$el.text();
             cy.log($el.text());
             var res=$el.text().split(" ");
             res=res[1].trim();
             total=Number(total)+Number(res)
            cy.log(total);
        }).then(function(){
          cy.log("TOTAL OF BASKET IS : "+total);
        })
        
        var gt=0;
        cy.get('h3 strong').then(function(gtamount){
        gt=gtamount.text().split(" ");
        gt=gt[1].trim();
        expect(Number(total)).to.equal(Number(gt));
        })
        cy.get('.btn.btn-success').click();
        cy.get('#country').type('In');
        cy.get('.suggestions ul li a').each(($el,index,$list) => {
        if ($el.text().includes('India')){
           cy.log('Found India')
           cy.get($el).click();
           cy.get("[for='checkbox2']").click();
           cy.get("[type='submit']").click();
           cy.get('.alert').then(function(ele){
            expect(ele.text().includes("Success")).to.be.true;
           })
          
        } 
           
       //   cy.get('#checkbox2').click();
         // expect('#country').value.to.equal('India');
        
      })
        })


        // cy.selectProduct('phone');
       //  cy.selectProduct('Note');
     //    cy.selectProduct('Edge');
      //   cy.get('.carousel-control-next').click();
      //   cy.get('.carousel-control-next').click(); 
      //   cy.get('.carousel-control-next').click();
       
      //   cy.selectCategory('1');
       //  cy.go('back');
       //  cy.selectCategory('3');

        /*.then(function(value){
          const value1=  value.text()
            value1.equal(this.data.name)
        });*/
        })
