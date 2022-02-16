import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import {DeliveryTypeComponent} from '../delivery-type/delivery-type.component';
import { DeliveryLabelComponent, TabActive } from '../delivery-label/delivery-label.component';

@Component({
  selector: 'app-delivery-label-list',
  templateUrl: './delivery-label-list.component.html',
  styleUrls: ['./delivery-label-list.component.less']
})
export class DeliveryLabelListComponent {
  @Input() tabList: QueryList<DeliveryTypeComponent>;
  @Output() tabOnChange: EventEmitter<TabActive> = new EventEmitter<TabActive>();
  @ViewChildren(DeliveryLabelComponent)
  public labelList: QueryList<DeliveryLabelComponent>;


  onActive($event: TabActive) {
    this.tabOnChange.emit($event);
    this.labelList.forEach((label: DeliveryLabelComponent, i: number) => {
      if (i !== $event.tabIndex) {
        label.unSetActive();
      }
    })
  }
}
