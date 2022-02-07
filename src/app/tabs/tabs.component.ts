import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentFactoryResolver,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {ControlContainer, Form, FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit,  AfterContentInit {
  @ViewChild('tabsRef', {static: true}) private tabsRef: ElementRef;
  @ContentChildren(TabComponent, {read: TabComponent}) tabList: QueryList<any>;
  constructor(private readonly controlContainer: ControlContainer, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    this.bindParentForm();
  }

  bindParentForm() {
    const parentForm = (this.controlContainer.formDirective as FormGroupDirective).form as FormGroup;
    const tabControlName = this.controlContainer.name;
    console.log(this.tabList);
    // parentForm.controls[tabControlName] = this.form;
    // parentForm.updateValueAndValidity();
  }
  setLabelActive(labels: ElementRef, current) {
    Array.from(labels.nativeElement.children).forEach((item: HTMLElement) => {
      item === current ? item.classList.add('active') : item.classList.remove('active');
    });
  }

  onClick(e, tab: TabComponent) {
    this.setLabelActive(this.tabsRef, e.target);
    console.log(tab);
    this.tabList.forEach((item: TabComponent) => {
      item === tab ? item.show() : item.hide();
    });
  }
}
