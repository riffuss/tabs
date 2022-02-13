import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import {ControlContainer, Form, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {DeliveryTypeComponent} from './delivery-type/delivery-type.component';

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
    this.bindParentForm();
  }

  bindParentForm() {
    const parentForm = (this.controlContainer.formDirective as FormGroupDirective).form as FormGroup;
    const tabControlName = this.controlContainer.name;
    // console.log(this.tabList);
    // parentForm.controls[tabControlName] = this.form;
    // parentForm.updateValueAndValidity();
  }
}
