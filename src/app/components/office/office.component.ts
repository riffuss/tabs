import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.less']
})
export class OfficeComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl('Москва', [Validators.required]),
      office: new FormControl('Вавилова ул., д.9, офис 3', [Validators.required]),
    });
  }

  onSubmit() {
    // console.log('Submit Office');
  }
}
