import { Component } from '@Core/component';
import { TopSide } from '@Components/categoryPage/categoryPage/header/topSide';
import { BottomSide } from '@Components/categoryPage/categoryPage/header/bottomSide';

export class Header extends Component {
    private LOCATORS = {
        topSide: this.locator.locator('//div[contains(@class, "topStrip__container")]'),
        bottomSide: this.locator.locator('//div[contains(@class, "mainMenu__container")]'),
    };

    public TopSide = new TopSide(this.LOCATORS.topSide, this.page);
    public BottomSide = new BottomSide(this.LOCATORS.bottomSide, this.page);
}
