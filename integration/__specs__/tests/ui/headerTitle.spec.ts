import { Mock } from '@Core/mock';
import { GetCartItemsMock } from "@Mocks/api/mockio/v1/id/get";
import { CartPage } from '@Components/cartPage/cartPage';

describe('Check header title', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(() => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Title should be in page', async () => {
        await cartPage.fulfill();
        const title = await cartPage.getHeaderTitle();

        expect(title).toStrictEqual('Shopping cart');

        await cartPage.ModalAddItem();
    });
});
