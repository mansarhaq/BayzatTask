describe('Search Delete Employee',function(){

    it('searchdeleteEmployee',function(){
    
    
      cy.visit('https://www.bayzat.com/')
      cy.title().should('eq','Compare, Buy Health Insurance Dubai & HR Software for SMEs, UAE - Bayzat')
      cy.fixture('user').then(user=> {
    
        const username= user.id
        const password= user.password
        cy.login(username,password)
        cy.wait(5000)
       cy.get('a[data-external-id=view-team-link]').scrollIntoView().click()
        cy.get("[placeholder='Search by employee name']").type("Ansar")
           cy.get(".text--primary-purple").click({force: true})
           cy.get('i[class*="fa filter__item-icon fa-square-o"]').last().click()
           cy.get('button[class*="  btn filter__submit btn-md mar-top pull-right js-filter__submit btn-primary ember-view"]').first(1).click()
           cy.get('table[class*="table hovered-rows loader  js-employee-list"]').contains('td', 'Ansar').should('be.visible')
           cy.get('table[class*="table hovered-rows loader  js-employee-list"] > tbody > tr:nth-child(1) > td:nth-child(1)').click()
           cy.get('button[class*="btn btn-danger ember-view mar-rgt--xs btn-icon"]').click() 
           cy.on('window:confirm', (str) =>
           {
              expect(str).to.contains('Are you sure you want to delete')
           })
           cy.get("[data-external-id='submit-button']").click()     
           cy.get("[data-external-id='logout-link']").click()

      })
    })
})
