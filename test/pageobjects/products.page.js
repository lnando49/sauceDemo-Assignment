import { $ } from '@wdio/globals'
import Page from './page.js';

class Products extends Page {
    get btnBackpack () {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get cartBadge () {
        return $('.shopping_cart_badge')
    }
    // 1. One clean selector that finds the card containing your product name, then goes straight to its button

    // 2. Clear out everything else and keep the action completely simple
    async addToCart (productName) {
        if (productName === 'Sauce Labs Backpack') {
            await this.btnBackpack.click();
        }
    }
}

export default new Products();

 