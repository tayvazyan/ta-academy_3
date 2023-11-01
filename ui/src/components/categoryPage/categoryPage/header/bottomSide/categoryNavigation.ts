import { Component } from '@Core/component';

export enum CategoryType {
    Eyeglasses = 'Eyeglasses',
    Sunglasses = 'Sunglasses',
    Multifocal = 'Multifocal',
}

export class CategoryNavigation extends Component {
    private LOCATORS = {
        link: (text: CategoryType) => this.locator.locator(`//a[text()="${text}"]`),
    };

    public async clickLink(category: CategoryType): Promise<void> {
        await Promise.all([this.LOCATORS.link(category).click(), this.page.waitForLoadState('load')]);
    }
}
