import { Component, ContentChild, ElementRef, Input, Renderer2 } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent {
  @Input() label: string;
  @Input() defaultActive: boolean;
  @ContentChild('content', {static: true}) content;

  isActive: boolean;
  form: FormGroup;
  constructor(private el: ElementRef, private r2: Renderer2) {

  }

  show() {
    this.r2.removeClass(this.el.nativeElement, 'hide');
  }
  hide() {
    this.r2.addClass(this.el.nativeElement, 'hide');
  }
}
