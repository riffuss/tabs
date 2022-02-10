import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrls: ['./tab-label.component.less']
})
export class TabLabelComponent implements OnInit {
  @Input() tab: TabComponent;
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
