import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import {ControlContainer, Form, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit,  AfterContentInit {
  @ContentChildren(TabComponent, {read: TabComponent}) tabList: QueryList<any>;
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
