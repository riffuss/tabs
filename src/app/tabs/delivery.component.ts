import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import {ControlContainer, Form, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {DeliveryTypeComponent} from './delivery-type/delivery-type.component';
import { TabActive } from './delivery-label/delivery-label.component';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.less']
})
export class DeliveryComponent implements OnInit,  AfterContentInit {
  @ContentChildren(DeliveryTypeComponent, {read: DeliveryTypeComponent}) tabList: QueryList<any>;
  constructor(private readonly controlContainer: ControlContainer) { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    // this.bindParentForm();
  }

  bindParentForm(tab: DeliveryTypeComponent) {
    // console.log('active Tab: ', tab);
    const parentForm = (this.controlContainer.formDirective as FormGroupDirective).form as FormGroup;
    const tabControlName = this.controlContainer.name.toString();

    if (tab?.form) {
      parentForm.setControl(tabControlName, tab.form)
      parentForm.updateValueAndValidity();
      console.log(parentForm.controls);

    } else {
      parentForm.removeControl(tabControlName);
      console.log(parentForm.controls);
    }
  }

  onChange($event: TabActive) {
    this.bindParentForm($event.tab)
  }
}
