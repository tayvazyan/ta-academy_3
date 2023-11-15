import { Component } from '@Core/component';
import { fireEvent } from '@testing-library/react';

export class CartItem extends Component {
    protected selectors = {
        name: './/div[@data-testid="cart-item"]//h2',
        fullPrice: './/div[contains(@class, "fullprice")]',
        priceForOne: './/div[contains(@class, "price-for-one")]',
        addButton: './/button[text()="+"]',
        quantity: './/div[@data-testid="quantity-current"]',
        buttonDelete: './/button[@data-testid="delete-btn"]',
    };

    public async getName(): Promise<string> {
        const [nameElement] = await document.waitForXpath(this.selectors.name);
        return nameElement.textContent;
    }

    public async getQuantity(): Promise<string | null> {
        const [quantityElement] = await document.waitForXpath(this.selectors.quantity);
        return quantityElement.textContent;
    }

    public async getPriceForAll(): Promise<string> {
        const [priceElement] = await document.waitForXpath(this.selectors.fullPrice);
        return priceElement.textContent.replace('$', '');
    }

    public async addOne(): Promise<void> {
        await this.element.clickByXpath(this.selectors.addButton);
    }

    public async clickDeleteButton(): Promise<void> {
        const [button] = await document.waitForXpath(this.selectors.buttonDelete);
        fireEvent.click(button);
    }
}
