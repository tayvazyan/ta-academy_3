import { Component } from '@Core/component';

export class Registration extends Component {
    private LOCATORS = {
        registrPopupTitle: this.locator.locator('//h2[contains(@class, "loginPopup")]'),
        registrCreateButton: this.locator.locator('//button[@aria-label="Create new account"]'),
        loader: this.locator.locator('//div[@aria-label="Loader"]'),
        placeholder: (text: string) => this.locator.locator(`//input[@placeholder="${text}"]`),
    };

    public async clickRegistrCreateButton(): Promise<void> {
        await this.LOCATORS.registrCreateButton.click();
        await this.LOCATORS.loader.waitFor({ state: 'hidden' });
    }

    public async getRegistrPopupTitle(): Promise<unknown> {
        return this.LOCATORS.registrPopupTitle.textContent();
    }

    public async typeText(placeholder: string, text: string): Promise<void> {
       await this.LOCATORS.placeholder(placeholder).type(text);
      }
}
