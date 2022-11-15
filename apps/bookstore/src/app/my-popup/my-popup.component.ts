import { Component, Input } from "@angular/core";

@Component({
  selector: 'my-popup',
  template: `
    <button (click)="toggle()">{{triggerText}}</button>
    <div *ngIf="open" class="my-popup-content"><ng-content></ng-content></div>
  `
})
export class MyPopupComponent {
  @Input() triggerText?: string;

  open = false;

  toggle() {
    this.open = !this.open;
  }
}