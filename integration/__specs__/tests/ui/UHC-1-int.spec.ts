import { ModalAddItem } from '@Components/cartPage/ModalAddItem/ModalAddItem';
import { CartPage } from '@Components/cartPage/cartPage';
import { CartItem } from '@Components/cartPage/cartList/cartItem/cartItem';
import { CartList } from '@Components/cartPage/cartList/cartList';

describe('UHC-Int-01', () => {
    let cartPage: CartPage;
    let modalAddItem: ModalAddItem;
    let cartItem: CartItem;
    let cartList: CartList;


    beforeAll(async () => {
        cartPage = new CartPage();
        modalAddItem = new ModalAddItem();
        cartItem = new CartItem();
        cartList = new CartList();
    });

    test('Add-Delete cart items', async () => {
        await cartPage.fulfill();

        reporter.startStep('Click Add Cart Item button');
        const expectedOpenModalTitle = "Add New Cart Item";

        await cartPage.OpenModalAddItem();
        expect( await modalAddItem.getModalTitle()).toStrictEqual(expectedOpenModalTitle);
        expect(await cartPage.getModalAddItem()).toBeInTheDocument;
        reporter.endStep();

        reporter.startStep('Fill all required fields & press Create');
        const modalItemName = "Dress";
        const modalItemPrice = "100.00";
        const modalItemQuantity = "1";

        await modalAddItem.typeText("name", modalItemName);
        await modalAddItem.typeText("price", modalItemPrice);
        await modalAddItem.typeText("quantity", modalItemQuantity);

        await modalAddItem.clickCreateButton();

        expect( await cartItem.getName()).toStrictEqual(modalItemName);
        expect( await cartItem.getPriceForAll()).toStrictEqual(modalItemPrice);
        expect( await cartItem.getQuantity()).toStrictEqual(modalItemQuantity);
        reporter.endStep();

        reporter.startStep('Click on Delete button of last added item');
        await cartItem.clickDeleteButton();
        expect( await cartList.getCartsCount()).toStrictEqual(0);
        reporter.endStep();
    });    
});
