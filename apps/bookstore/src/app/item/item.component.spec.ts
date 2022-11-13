import { ITEM_MOCK } from './item.mock';
import { Item } from './item.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let item: Item;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    item = ITEM_MOCK;
    component.item = item;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render item', () => {
    const title: HTMLElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.textContent).toEqual(item.title);

    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.src).toEqual(item.previewImgUrl);

  });

  it('emit add to cart event - with spys', () => {
    jest.spyOn(component.addToCart, 'emit');

    component.addToCartClicked();

    expect(component.addToCart.emit).toHaveBeenCalledTimes(1);
  });

  it('emit add to cart - observables', () => {
    component.addToCart.subscribe((res: Item) => {
      expect(res).toEqual(item);
    });

    component.addToCartClicked();

  });

  it('emit remove from cart event - with spys', () => {
    jest.spyOn(component.removeFromCart, 'emit');

    component.removeFromCartClicked();

    expect(component.removeFromCart.emit).toHaveBeenCalledTimes(1);
  });

  it('emit remove from cart after clicking on the button', () => {
    const removeBtn: HTMLElement = fixture.nativeElement.querySelector('.remove-from-cart');
    jest.spyOn(component.removeFromCart, 'emit');

    removeBtn.click();

    expect(component.removeFromCart.emit).toHaveBeenCalledTimes(1);
  });
});
