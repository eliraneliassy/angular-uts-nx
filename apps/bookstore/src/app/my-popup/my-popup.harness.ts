import { ComponentHarness } from "@angular/cdk/testing";

export class MyPopupHarness extends ComponentHarness {
    static hostSelector = 'my-popup';
  
    protected getTriggerElement = this.locatorFor('button');
    protected getContentElement = this.locatorForOptional('.my-popup-content');
  
    /** Toggles the open state of the popup. */
    async toggle() {
      const trigger = await this.getTriggerElement();
      return trigger.click();
    }
  
    /** Checks if the popup us open. */
    async isOpen() {
      const content = await this.getContentElement();
      return !!content;
    }
  }