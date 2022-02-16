import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DeliveryItem } from '../../tabs/delivery-type/delivery-type.component';
import { FormGroup } from '@angular/forms';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-delivery-courier',
  templateUrl: './delivery-courier.component.html',
  styleUrls: ['./delivery-courier.component.less']
})
export class DeliveryCourierComponent implements OnInit, AfterViewInit, DeliveryItem {
  @ViewChild(AddressComponent, {static: true}) address;
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.form = this.address.form;
  }

}
