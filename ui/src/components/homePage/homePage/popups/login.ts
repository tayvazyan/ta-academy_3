import { Component } from '@Core/component';

export class Login extends Component {
    private LOCATORS = {
        loginPopupTitle: this.locator.locator('//section[.//p[not(contains(@class, "signUp"))]]//h2'),
        loginCreateButton: this.locator.locator('//button[@value ="create"]'),
    };

    public async clickLoginCreateButton(): Promise<void> {
        await this.LOCATORS.loginCreateButton.click();
    }

    public async getLoginPopupTitle(): Promise<unknown> {
        return this.LOCATORS.loginPopupTitle.textContent();
    }
}
