import { Mock } from '@Core/mock';
import { CartPage } from '@Components/cartPage/cartPage';

describe('Check header title', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Title should be in page', async () => {
        await cartPage.fulfill();
        const title = await cartPage.getHeaderTitle();

        expect(title).toStrictEqual('Shopping cart');

        await cartPage.OpenModalAddItem();
    });
});
