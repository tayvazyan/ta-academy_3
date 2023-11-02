import type { Options } from '@Test';
import { test, expect } from '@Test';

test.describe('UHC-1 (test ID)', () => {
    test('Registration new customer with valid data', async ({
        page,
        baseURL,
    }: Options) => {
        await page.goto(baseURL, { waitUntil: 'domcontentloaded' }); 

        // step 1

        const dropdownTitleLoc = '//div[contains(@class, "accountContainer")]';
        await page.hover(dropdownTitleLoc, {noWaitAfter: true});
        await page.getByRole('button', { name:'Log in' }).click();
        
        const loginPopup= page.locator('//div[contains(@class, "loginPopup") and ./section[not(contains(@class, "createAccount"))]]');
        await expect(loginPopup).toBeVisible();

        const modalTitle = await page.locator('//section[.//p[not(contains(@class, "signUp"))]]//h2').textContent();
        expect(modalTitle).toStrictEqual('Access your vision benefits');

        //step 2
        
        await page.locator('//button[@value ="create"]').click();

        const registrationPopup= page.locator('//div[contains(@class, "loginPopup") and ./section[contains(@class, "createAccount")]]');
        await expect(registrationPopup).toBeVisible();

        const registrationPopupTitle = await page.locator('//h2[contains(@class, "loginPopup")]').textContent();
        expect(registrationPopupTitle).toStrictEqual('No vision insurance? We got you!');

        //step 3 

        const firstName = 'firstname';
        await page.getByPlaceholder('First Name').type(firstName);
        await page.getByPlaceholder('Last Name').type('lastname');

        const randomPrefix = Math.random().toString(36).substring(2,7);
        const email = randomPrefix + '@gmail.com';
        await page.getByPlaceholder('Email').type(`${email}`);
        await page.getByPlaceholder('Password').type('Password123');
        await page.locator('//button[@aria-label="Create new account"]').click();
        
        await expect(registrationPopup).toBeVisible({visible: false});

        const welcomePopup= page.locator('//div[contains(@class, "welcomePopup__wrapper")]');
        await expect(welcomePopup).toBeVisible();

        await page.locator('//span[contains(@class, "loader")]').waitFor({state: "hidden"});

        const welcomePopupTitle = await page.locator('//h2[contains(@class, "welcomePopup__title")]').textContent();
        expect(welcomePopupTitle).toStrictEqual(`Welcome, ${firstName}`);

        const welcomePopupSubTitle = await page.locator('//p[contains(@class, "welcomePopup__subtitle")]').textContent();
        expect(welcomePopupSubTitle).toStrictEqual('You can start enjoying everything we have to offer');

        // step 4

        await page.locator('//button[@aria-label="Close"]').click();
        await expect(welcomePopup).toBeVisible({visible: false});
        
        const dropdownTitle = await page.locator(dropdownTitleLoc).textContent();
        expect(dropdownTitle).toStrictEqual(`Hello, ${firstName}`);

        const widgetTitle = await page.locator('//div[contains(@class, "Widget")]//header//p').textContent();
        expect(widgetTitle).toStrictEqual(`Hi ${firstName}`);

        // step 5

        await page.hover(dropdownTitleLoc, {noWaitAfter: true});
        await page.getByRole('button', { name:'Sign out' }).click();

        const snackbar= page.locator('//div[contains(@class, "myAccount") and contains(@class, "MenuDropdown")]');
        await expect(snackbar).toBeVisible({visible: false});

        const dropdownTitleUpdated = await page.locator(dropdownTitleLoc).textContent();
        expect(dropdownTitleUpdated).toStrictEqual(`My Account`);
    });
});
