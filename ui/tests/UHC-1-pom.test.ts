import { expect, test } from '@Test';

test.describe('UHC-1-pom', () => {
    test('Registration new customer with valid data', async ({ homePage }) => {
        const popupLogin = "login";
        const popupRegistration = "registration";
        const popupWelcome = "welcome";
       
        await test.step('Test-step 1 | Hover on "My Account" button and click on "Log In" button', async () => {
            const expectedLoginTitle = "Access your vision benefits";
            
            await homePage.open();
            await homePage.Header.TopSide.clickLogin();

            expect(await homePage.isVisiblePopup(popupLogin)).toBe(true);
            expect(await homePage.Login.getLoginPopupTitle()).toStrictEqual(expectedLoginTitle);
        });

        await test.step('Test-step 2 | Click on "Create UHCGlasses.com Account" button', async () => {
            const expectedRegistrationTitle = "No vision insurance? We got you!";

            await homePage.Login.clickLoginCreateButton();
            
            expect(await homePage.isVisiblePopup(popupRegistration)).toBe(true);
            expect(await homePage.Registration.getRegistrPopupTitle()).toStrictEqual(expectedRegistrationTitle);
        });

        await test.step('Test-step 3 | Fill out form with valid data and click on "Create UHCGlasses.com Account" button', async () => {
            const firstName = "firstname";
            const lastName = "lastname";
            const email =  Math.random().toString(36).substring(2, 7) + '@gmail.com';
            const password = 'Password123';
            const placeholderFirstName = "First Name";
            const placeholderLastName = "Last Name";
            const placeholderEmail = "Email";
            const placeholderPassword = "Password";
            const expectedWelcomeTitle = `Welcome, ${firstName}`;
            const expectedWelcomeSubTitle = "You can start enjoying everything we have to offer";

            await homePage.Registration.typeText(placeholderFirstName, firstName);
            await homePage.Registration.typeText(placeholderLastName, lastName);
            await homePage.Registration.typeText(placeholderEmail, email);
            await homePage.Registration.typeText(placeholderPassword, password);

            await homePage.Registration.clickRegistrCreateButton();
            
            expect(await homePage.isVisiblePopup(popupRegistration)).toBe(false);
            expect(await homePage.isVisiblePopup(popupWelcome)).toBe(true); 
            expect(await homePage.Welcome.getWelcomePopupTitle()).toStrictEqual(expectedWelcomeTitle);
            expect(await homePage.Welcome.getWelcomePopupSubTitle()).toStrictEqual(expectedWelcomeSubTitle);
        });
    });
});
