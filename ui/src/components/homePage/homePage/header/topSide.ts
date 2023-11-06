import { Component } from '@Core/component';

export class TopSide extends Component {
    private LOCATORS = {
        buttonLogIn: this.locator.locator('//button[text()="Log in"]'),
        loginPopup: this.locator.locator('//div[contains(@class, "loginPopup") and ./section[not(contains(@class, "createAccount"))]]'),
        modalTitle: this.locator.locator('//section[.//p[not(contains(@class, "signUp"))]]//h2'),
    };

    private SELECTORS = {
        dropdownTitleLoc: '//div[contains(@class, "accountContainer")]',
    };

    private async hoverAccountMenu(): Promise<void> {
        await this.page.hover(this.SELECTORS.dropdownTitleLoc, { noWaitAfter: true });
    }

    public async clickLogin(): Promise<void> {
        await this.hoverAccountMenu();
        await this.LOCATORS.buttonLogIn.click();
    }
}
