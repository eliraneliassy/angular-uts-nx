import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { DiscountPipe } from './discount.pipe';
import { ChangeColorDirective } from './change-color.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MySwitchComponent } from './my-switch/my-switch.component';
import { MyPopupComponent } from './my-popup/my-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    DiscountPipe,
    ChangeColorDirective,
    ItemPreviewComponent,
    MySwitchComponent,
    MyPopupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
