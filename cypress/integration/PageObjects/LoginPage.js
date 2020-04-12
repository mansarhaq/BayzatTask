/// <reference types="Cypress" />

class LoginPage
{

    visit()
    {

        cy.visit('https://www.bayzat.com/')
        cy.title().should('eq','Compare, Buy Health Insurance Dubai & HR Software for SMEs, UAE - Bayzat')
        cy.get('.style__ButtonList-sc-1gkfjmw-3 > :nth-child(1) > .style__StyledButton-sc-58yt2r-0 > .style__TextWrap-sc-58yt2r-1 > .style__Text-sc-58yt2r-2').click()

      }

    userEmail()
    {

      const  userField=cy.get('#ember12-field')
      userField.clear()
      userField.type('test+testcompany@bayzat.com')
      return this
    }

    userPassword()
    {

      const  passwordField=cy.get('#ember13-field')
      passwordField.clear()
      passwordField.type('123456789')
      return this
    }

    submit()
    {

      const  submitButton=cy.get('#ember16')
            submitButton.click()
    
    }

}

export default LoginPage

