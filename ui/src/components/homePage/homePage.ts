import { Container } from '@Core/container';
import { Header } from '@Components/homePage/homePage/header';
import { Login } from '@Components/homePage/homePage/popups/login';
import { Registration } from '@Components/homePage/homePage/popups/registration';
import { Welcome } from '@Components/homePage/homePage/popups/welcome';

export class HomePage extends Container {
    private LOCATORS = {
        header: this.page.locator('//div[contains(@class, "header__wrapHeader")]'),
        loginPopup: this.page.locator('//div[contains(@class, "loginPopup") and ./section[not(contains(@class, "createAccount"))]]'),
        registrationPopup: this.page.locator('//div[contains(@class, "loginPopup") and ./section[contains(@class, "createAccount")]]'),
        welcomePopup: this.page.locator('//div[contains(@class, "welcomePopup__wrapper")]'),
    };

    public Header = new Header(this.LOCATORS.header, this.page);
    public Login = new Login(this.LOCATORS.loginPopup, this.page);
    public Registration = new Registration(this.LOCATORS.registrationPopup, this.page);
    public Welcome = new Welcome(this.LOCATORS.welcomePopup, this.page);

    public async isVisiblePopup(popup: string): Promise<boolean> {
        switch ( popup ) {
            case "login":
                return await this.LOCATORS.loginPopup.isVisible();
                break;
            case "registration":
                return await this.LOCATORS.registrationPopup.isVisible();
                break;
            case "welcome":
                await this.LOCATORS.welcomePopup.waitFor({ state: 'attached' });
                return await this.LOCATORS.welcomePopup.isVisible();
                break;
            default: 
                return false; 
         }
    }

    public async open(): Promise<void> {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }
}
