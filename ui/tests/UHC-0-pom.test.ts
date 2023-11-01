import { test } from '@Test';
import { CategoryType } from '@Components/categoryPage/categoryPage/header/bottomSide/categoryNavigation';

test.describe('UHC-0-pom', () => {
    test('The title of test will be here...', async ({ page, homePage }) => {
        await homePage.open();

        const navigation = homePage.Header.BottomSide.CategoryNavigation;
        await navigation.clickLink(CategoryType.Eyeglasses);
    });
});
