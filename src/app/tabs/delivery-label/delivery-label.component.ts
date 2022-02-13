import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import {DeliveryTypeComponent} from '../delivery-type/delivery-type.component';

@Component({
  selector: 'app-delivery-label',
  templateUrl: './delivery-label.component.html',
  styleUrls: ['./delivery-label.component.less']
})
export class DeliveryLabelComponent implements OnInit {
  @Input() tab: DeliveryTypeComponent;
  @Input() tabIndex: number;
  @Output() isActive: EventEmitter<number> = new EventEmitter<number>();
  @HostListener('click', ['$event']) onClick(e) {
    this.isActive.emit(this.tabIndex);
    this.setActive();
  }
  constructor(private readonly el: ElementRef, private readonly r2: Renderer2) { }

  ngOnInit(): void {
    this.tab.defaultActive ? this.setActive() : this.unSetActive();
    console.log(this.tab.defaultActive);
  }
  private setActive() {
    this.tab.show();
    this.r2.addClass(this.el.nativeElement, 'active');
  }
  unSetActive() {
    this.tab.hide();
    this.r2.removeClass(this.el.nativeElement, 'active');
  }
}
