import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './tabs/address/address.component';
import { OfficeComponent } from './tabs/office/office.component';
import { TabComponent } from './tabs/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AddressComponent,
    OfficeComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [TabComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
