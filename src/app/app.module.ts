import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './tabs/address/address.component';
import { OfficeComponent } from './tabs/office/office.component';
import { TabComponent } from './tabs/tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { TabLabelComponent } from './tabs/tab-label/tab-label.component';
import { TabLabelListComponent } from './tabs/tab-label-list/tab-label-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    AddressComponent,
    OfficeComponent,
    TabComponent,
    TabLabelComponent,
    TabLabelListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  entryComponents: [TabComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
