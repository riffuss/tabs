import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {DeliveryTypeComponent} from '../delivery-type/delivery-type.component';
export interface TabActive{
  tabIndex: number;
  tab: DeliveryTypeComponent
}
@Component({
  selector: 'app-delivery-label',
  templateUrl: './delivery-label.component.html',
  styleUrls: ['./delivery-label.component.less']
})
export class DeliveryLabelComponent implements OnInit, AfterViewInit {
  @Input() tab: DeliveryTypeComponent;
  @Input() tabIndex: number;
  @Output() isActive: EventEmitter<TabActive> = new EventEmitter<TabActive>();
  @HostListener('click', ['$event']) onClick(e) {
    // this.isActive.emit({tabIndex: this.tabIndex, tab: this.tab});
    this.setActive();
  }
  constructor(private readonly el: ElementRef, private readonly r2: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.tab.defaultActive);
  }

  ngAfterViewInit() {
    setTimeout(() => this.tab.defaultActive ? this.setActive() : this.unSetActive())
  }

  private setActive() {
    this.tab.show();
    this.r2.addClass(this.el.nativeElement, 'active');
    this.isActive.emit({tabIndex: this.tabIndex, tab: this.tab});
  }
  unSetActive() {
    this.tab.hide();
    this.r2.removeClass(this.el.nativeElement, 'active');
  }
}
