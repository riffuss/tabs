import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './tabs/address/address.component';
import { OfficeComponent } from './tabs/office/office.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabLabelComponent } from './tabs/tab/tab-label/tab-label.component';
import { TabContentComponent } from './tabs/tab/tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AddressComponent,
    OfficeComponent,
    TabComponent,
    TabLabelComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
