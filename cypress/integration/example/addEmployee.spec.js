describe('Login and Add Employee',function(){

    it('Add Employee twice',function(){
    
    
      cy.visit('https://www.bayzat.com/')
      cy.title().should('eq','Compare, Buy Health Insurance Dubai & HR Software for SMEs, UAE - Bayzat')
      cy.fixture('user').then(user=> {
    
        const username= user.id
        const password= user.password
        cy.login(username,password)
        cy.wait(5000)
    
      var nooftimes = Array.from({length:2},(v,k)=>k+1)
      cy.wrap(nooftimes).each((index) => {
    cy.wait(5000)
    cy.get('a[data-external-id=add-employees-link]').scrollIntoView().click()
    cy.get('a[href*="/enterprise/dashboard/employees/create"]').click()
    cy.get('input[name=preferredName]').type('ansar')
    cy.get('input[name=firstName]').type('Muhammad1')
    cy.get('input[name=lastName]').type('ansarulhaq1')
    cy.get('input[name=dateOfBirthFormatted]').type('01/01/1980').type('{enter}')
    cy.get('.ember-power-select-placeholder').contains('Please select nationality').click().type('pak')
    cy.get('.ember-power-select-placeholder').contains('Please select gender').click()
    cy.wait(5000)
    cy.get('.ember-power-select-option').contains('Male').click()
    cy.get('input[name=mobileNumber]').type('0097155123457')
    cy.get('input[name=workEmail]').type('aa@b.com')//
    cy.get('input[name=officeNumber]').type('0097155654322')
    cy.get('input[name=position]').type('engineer')
    cy.get('input[data-external-id=hired-at-formatted-date-picker-input]').type('01/05/2020').type('{enter}')
    cy.get('input[data-external-id=probation-end-date-formatted-date-picker-input]').type('01/08/2020').type('{enter}')
   // cy.get('.ember-power-select-selected-item').contains('Default').click()
    cy.get('.ember-power-select-placeholder').contains('Please select country of residence').click()
    cy.wait(3000)
    cy.get('.ember-power-select-option').contains('United Arab Emirates').click()
    cy.get('.ember-power-select-placeholder').contains('Please select visa location').click()
    cy.wait(3000)
    cy.get('.ember-power-select-option').contains('Dubai').click()
    cy.get('.ember-power-select-placeholder').contains('Please select trade license').click()
    cy.wait(3000)
    cy.get('.ember-power-select-option').contains('Test Trade License1').click()
    cy.get('input[name=ministryOfLabourId]').type('12345678901277')
    cy.get('button[class*="btn btn--radio btn--no-overflow bord--no btn-default"]').first(1).click()
    cy.get('button[class*="btn btn-lg mar-rgt btn-primary ember-view"]').first(1).click()
    cy.url().should('include','https://www.bayzat.com/enterprise/dashboard/login')
    
         
      })

   

      })
    })
})
