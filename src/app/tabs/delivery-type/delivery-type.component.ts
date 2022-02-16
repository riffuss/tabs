import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  Renderer2
} from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface DeliveryItem{
  form: FormGroup;
}

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.less']
})
export class DeliveryTypeComponent implements AfterViewInit{
  @Input() label: string;
  @Input() defaultActive: boolean;
  @ContentChild('type', {static: false}) content;

  form: FormGroup;

  constructor(private el: ElementRef, private r2: Renderer2) {}

  ngAfterViewInit() {
    this.form = this.content.form;
  }

  show() {
    this.r2.removeClass(this.el.nativeElement, 'hide');
  }
  hide() {
    this.r2.addClass(this.el.nativeElement, 'hide');
  }
}
