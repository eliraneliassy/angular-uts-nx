import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { BooksService } from './books.service';
import { Component } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { Item } from './item/item.interface';
import { MatDialog } from '@angular/material/dialog';
import { json } from 'stream/consumers';

@Component({
  selector: 'angular-uts-workshop-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  books$: Observable<Item[]>;

  constructor(private booksService: BooksService, public dialog: MatDialog) {
    this.books$ = this.booksService.getBooks('Angular');

    

  }

  previewItem(item: Item) {
    this.dialog.open(ItemPreviewComponent, { data: item });
  }
}
