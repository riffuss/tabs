import { Component, OnInit } from '@angular/core';
import {ControlContainer, Form, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly controlContainer: ControlContainer) { }

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl('Москва', [Validators.required]),
      street: new FormControl('Вавилова', [Validators.required]),
      house: new FormControl('9А'),
      flat: new FormControl('12')
    });
    this.bindParentForm();
  }

  bindParentForm() {
    const parentForm = (this.controlContainer.formDirective as FormGroupDirective).form as FormGroup;
    const tabControlName = this.controlContainer.name;
    parentForm.controls[tabControlName] = this.form;
    parentForm.updateValueAndValidity();
  }

}
