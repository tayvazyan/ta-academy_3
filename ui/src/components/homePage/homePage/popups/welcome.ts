import { Component } from '@Core/component';

export class Welcome extends Component {
    private LOCATORS = {
        welcomePopupTitle: this.locator.locator('//h2[contains(@class, "welcomePopup__title")]'),
        loader: this.locator.locator('//span[contains(@class, "loader")]'), 
        welcomePopupSubTitle: this.locator.locator('//p[contains(@class, "welcomePopup__subtitle")]'),
    };

    public async getWelcomePopupTitle(): Promise<unknown> {
        await this.LOCATORS.loader.waitFor({ state: 'hidden' });
        return this.LOCATORS.welcomePopupTitle.textContent();
    }

    public async getWelcomePopupSubTitle(): Promise<unknown> {
        return this.LOCATORS.welcomePopupSubTitle.textContent();
    }
}
