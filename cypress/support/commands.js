// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => { 

    cy.get('.style__ButtonList-sc-1gkfjmw-3 > :nth-child(1) > .style__StyledButton-sc-58yt2r-0 > .style__TextWrap-sc-58yt2r-1 > .style__Text-sc-58yt2r-2').click()
    cy.get('#ember12-field').clear().type(username)
    cy.get('#ember13-field').clear().type(password)
    cy.get('#ember16').click()

 })
