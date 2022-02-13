import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './components/address/address.component';
import { OfficeComponent } from './components/office/office.component';
import {DeliveryTypeComponent} from './tabs/delivery-type/delivery-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { DeliveryLabelComponent } from './tabs/delivery-label/delivery-label.component';
import { DeliveryLabelListComponent } from './tabs/delivery-label-list/delivery-label-list.component';
import { DeliveryCourierComponent } from './components/delivery-courier/delivery-courier.component';
import {DeliveryComponent} from './tabs/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    AddressComponent,
    OfficeComponent,
    DeliveryTypeComponent,
    DeliveryLabelComponent,
    DeliveryLabelListComponent,
    DeliveryCourierComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
