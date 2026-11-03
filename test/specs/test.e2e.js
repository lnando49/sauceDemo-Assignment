import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(LoginPage.standardLogin, LoginPage.passwordStandard);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect($('.title')).toHaveText('Products');
    })
})

