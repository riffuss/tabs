import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      city: new FormControl('Москва', [Validators.required]),
      street: new FormControl('Вавилова', [Validators.required]),
      house: new FormControl('9А'),
      flat: new FormControl('12')
    });
  }

  onSubmit() {
    console.log('Submit Address');
  }
}
