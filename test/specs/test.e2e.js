import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Products from '../pageobjects/products.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
    


        for (let i = 0; i < LoginPage.credentials.users.length; i++) {
        
            await LoginPage.open();
            await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password);
            await expect(browser).toHaveUrl(`https://www.saucedemo.com/inventory.html`)
            await expect(LoginPage.headerName).toBeDisplayed('Products')
            
        }
    
        await Products.addToCart('Sauce Labs Backpack');   
        await expect(Products.cartBadge).toHaveText('1')
       
    })
})