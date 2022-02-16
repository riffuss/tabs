import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Custom tabs';
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      codeWord: new FormControl(''),
      shipping: new FormGroup({})
    });
  }
  ngAfterViewInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }
}
