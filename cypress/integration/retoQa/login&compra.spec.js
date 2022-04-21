/// <reference types="cypress" />

describe('Visit to  home', () => {
    
    it('Register the user', () => {
            cy.visit('https://www.saucedemo.com')
            cy.get('[data-test="username"]').click({force:true}).type('standard_user')
            cy.get('[data-test="password"]').click({force:true}).type('secret_sauce')
            cy.wait(2000)
        })
        it('buy three items and logout', ()=>{
            cy.get('[data-test="login-button"]').click({force:true})
            cy.wait(2000)
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click({force:true})
            cy.wait(2000)
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click({force:true})
            cy.wait(2000)
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').scrollIntoView().click({force:true})
            cy.get('.shopping_cart_link').scrollIntoView()
            .click({force:true})
            cy.wait(3000)
            cy.get('[data-test="checkout"]').click({force:true})
            cy.wait(2000)
            cy.get('[data-test="firstName"]').click({force:true}).type('Rolando')
            cy.get('[data-test="lastName"]').click({force:true}).type('Thielen')
            cy.get('[data-test="postalCode"]').click({force:true}).type('8320000')
            cy.wait(2000)
            cy.get('[data-test="continue"]').click({force:true})
            cy.get('[data-test="finish"]').click({force:true})
            cy.xpath('/html/body/div/div/div/div[1]/div[1]/div[1]/div/div[1]/div/button')
            .click({force:true})
            cy.get('#logout_sidebar_link').click({force:true})
           })
         })

         
         
