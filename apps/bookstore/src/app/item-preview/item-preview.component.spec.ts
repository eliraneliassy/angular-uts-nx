import { ItemComponent } from './../item/item.component';
import { ITEM_MOCK } from './../item/item.mock';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPreviewComponent } from './item-preview.component';

describe('ItemPreviewComponent', () => {
  let component: ItemPreviewComponent;
  let fixture: ComponentFixture<ItemPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPreviewComponent, ItemComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: ITEM_MOCK }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
