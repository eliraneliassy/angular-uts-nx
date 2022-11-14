import { ItemComponent } from './item/item.component';
import { BooksService } from './books.service';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { ITEMS_MOCK, ITEM_MOCK } from './item/item.mock';
import { Item } from './item/item.interface';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, flush, flushMicrotasks, TestBed, waitForAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { delay, of, Observable, tap } from 'rxjs';


describe('AppComponent', () => {

  let item: Item;
  let booksService: BooksService;
  let itemsMock: Item[];
  beforeEach(async () => {
    item = ITEM_MOCK;

    booksService = {
      getBooks: (term: string): Observable<Item[]> =>
      new Observable((subscriber) => {
        setTimeout(() => {
          subscriber.next(ITEMS_MOCK),
          subscriber.complete()
        }, 1000)
      })
        // of(ITEMS_MOCK)
        //   .pipe(
        //     tap(console.log),
        //     delay(1000)
        // )
    } as any;

    itemsMock = ITEMS_MOCK;

    await TestBed.configureTestingModule({
      declarations: [AppComponent, ItemComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: BooksService, useValue: booksService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should show items', () => {
  //   const fixture = TestBed.createComponent(AppComponent);

  //   fixture.detectChanges();

  //   const items: HTMLDivElement = fixture.debugElement.query(By.css('.items')).nativeElement;
  //   console.log(items);

  //   const firstItem = items.querySelectorAll('.item')[0];

  //   expect(firstItem.querySelector('.title')?.textContent).toEqual(ITEMS_MOCK[0].title);

  // });

  it('should show items - waitForAsync', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const items: HTMLDivElement = fixture.debugElement.query(By.css('.items')).nativeElement;
      console.log(items);

      const firstItem = items.querySelectorAll('.item')[0];

      expect(firstItem.querySelector('.title')?.textContent).toEqual(ITEMS_MOCK[0].title);
    })

  }));

  it('should show items - fakeAsync', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // tick(1000);
    
    flush();
    
    fixture.detectChanges();

    const items: HTMLDivElement = fixture.debugElement.query(By.css('.items')).nativeElement;
    console.log(items);

    const firstItem = items.querySelectorAll('.item')[0];

    expect(firstItem.querySelector('.title')?.textContent).toEqual(ITEMS_MOCK[0].title);


  }));



  it('should show dialog when clicking on item with items data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    const openDialogSpy = jest.spyOn(component.dialog, 'open')

    component.previewItem(item);


    expect(openDialogSpy).toHaveBeenCalledWith(ItemPreviewComponent, { data: item });

    fixture.detectChanges();


  });


});
