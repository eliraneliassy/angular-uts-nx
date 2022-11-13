import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item?: Item;

  @Output() addToCart = new EventEmitter<Item>();
  @Output() removeFromCart = new EventEmitter<Item>();

  removeFromCartClicked() {
    console.log('123')
    this.removeFromCart.emit(this.item);
  }

  addToCartClicked() {
    this.addToCart.emit(this.item);
  }



}
