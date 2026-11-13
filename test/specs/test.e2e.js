import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import Products from '../pageobjects/products.page.js'

describe('My Login application', () => {
    it('should login with standard', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[0], LoginPage.credentials.password)
        await expect(LoginPage.headerName).toHaveText('Products')
    }) 
    it('should login with visual_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[1], LoginPage.credentials.password)
        await expect(LoginPage.headerName).toHaveText('Products')
    })   
    it('should login with problem_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[2], LoginPage.credentials.password)
        await expect(LoginPage.headerName).toHaveText('Products')
    })   
    it('should login with error_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[3], LoginPage.credentials.password)
        await expect(LoginPage.headerName).toHaveText('Products')
    })    
    // it('should login with locked_out_user', async () => {
    //     await LoginPage.open()
    //     await LoginPage.login(LoginPage.credentials.allUsers[4], LoginPage.credentials.password)
    //     await expect(LoginPage.headerName).toHaveText('Products')
    // }) 
    it('should login with performance_glitch_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[5], LoginPage.credentials.password)
        await expect(LoginPage.headerName).toHaveText('Products')
    })
    //     for (let i = 0; i < LoginPage.credentials.allUsers.length; i++) {
    //        await LoginPage.open() 

    // //        await LoginPage.login(LoginPage.credentials.allUsers[i], LoginPage.credentials.password)
    // //    await expect(browser).toHaveUrl(`https://www.saucedemo.com/inventory.html`)
    // //    await expect(LoginPage.shoppingCart).toBeDisplayed()
    // //    await expect(LoginPage.headerName).toHaveText('Products')
    //     }
        
        // await Products.addToCart('backpack')
        // await expect(Products.cartBadge).toHaveText('1')
        it('should fail login with standard', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[0],'asd')
        await expect(LoginPage.errorMsg).toBeDisplayed()
    }) 
    it('should fail login with visual_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[1],'asd')
        await expect(LoginPage.errorMsg).toBeDisplayed()
    })   
    it('should fail login with problem_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[2],'asd')
        await expect(LoginPage.errorMsg).toBeDisplayed()
    })   
    it('should fail login with error_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[3],'asd')
        await expect(LoginPage.errorMsg).toBeDisplayed()
    })    
    it('should fail login with locked_out_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[4], LoginPage.credentials.password)
        await expect(LoginPage.errorMsg).toBeDisplayed()
    }) 
    it('should fail login with performance_glitch_user', async () => {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[5],'asd')
        await expect(LoginPage.errorMsg).toBeDisplayed()
    })
        
    })

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
    


//         for (let i = 0; i < LoginPage.credentials.users.length; i++) {
        
//             await LoginPage.open();
//             await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password);
//             await expect(browser).toHaveUrl(`https://www.saucedemo.com/inventory.html`)
//             await expect(LoginPage.headerName).toBeDisplayed('Products')

             
            
//         }
       
//     await Products.addToCart('backpack');   
      
//     await expect(Products.cartBadge).toHaveText('1')
       
//     })
// })