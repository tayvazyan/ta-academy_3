import { Component } from '@Core/component';
import { fireEvent } from '@testing-library/react';

export class ModalAddItem extends Component {
    protected selectors = {
        modalInputs: (text: string) => `.//input[@name="${text}"]`,
        buttonCreate: './/button[text()="Create"]',
        modalTitle: './/div[@data-testid="modal"]//h2',
    };

    public async getModalTitle(): Promise<string> {
        const [title] = await document.waitForXpath(this.selectors.modalTitle);
        return title.textContent;
    }

    public async typeText(modalInput: string, text: string): Promise<void> {
        const [modalInputElement] = await document.waitForXpath(this.selectors.modalInputs(modalInput));
        fireEvent.change(modalInputElement,  {
            target: { value: text }
          });
    }

    public async clickCreateButton(): Promise<void> {
        const [button] = await document.waitForXpath(this.selectors.buttonCreate);
        fireEvent.click(button);
    }
}
