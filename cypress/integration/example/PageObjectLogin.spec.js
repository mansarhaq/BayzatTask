/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Login with page objects' , function(){

it('Login Bayzat',function()
{

    
const lp=new LoginPage
lp.visit()
lp.userEmail()
lp.userPassword()
lp.submit()
})

})

