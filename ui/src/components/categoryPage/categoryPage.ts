import { Container } from '@Core/container';
import type { Locator } from '@playwright/test';

export enum CategoryUri {
    Eyeglasses = '/eyeglasses-collection',
    Sunglasses = '/prescription-sunglasses',
    Multifocal = '/progressive-lenses',
}

export class CategoryPage extends Container {
    protected LOCATORS = {
        product: this.page.locator('[data-test-name="product"]'),
        footer: this.page.locator('//footer[contains(., "Live Chat" )]'),
    };

    public async open(url: CategoryUri = CategoryUri.Eyeglasses): Promise<void> {
        await Promise.all([
            this.page.goto(url),
            this.page.waitForURL(url),
            this.page.waitForLoadState('load'),
    ]);
    }

    public async getProducts(): Promise<Locator[]> {
        return await this.LOCATORS.product.all();
    }
}
