import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit, AfterContentInit {
  @Input() label: string;
  @Input() defaultActive: boolean;
  @ContentChild('content', {static: true}) content;

  isActive: boolean;
  form: FormGroup;
  constructor() {

  }

  ngOnInit() {
    this.isActive = this.defaultActive;
  }
  ngAfterContentInit() {
    console.log(this.content);
    // this.form = this.content.form;
  }
}
