import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Custom tabs';
  form: FormGroup;
  @ViewChild(TabsComponent, {static: false}) tabs;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      codeWord: new FormControl(''),
      shipping: new FormGroup({})
    });
  }
  ngAfterViewInit() {
    console.log(this.tabs);
  }

  onSubmit() {
    console.log(this.form);
  }
}
