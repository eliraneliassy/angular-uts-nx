import { Item } from './../item/item.interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'angular-uts-workshop-nx-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item) { }

  
}
