import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import {DeliveryTypeComponent} from '../delivery-type/delivery-type.component';
import { DeliveryLabelComponent } from '../delivery-label/delivery-label.component';

@Component({
  selector: 'app-delivery-label-list',
  templateUrl: './delivery-label-list.component.html',
  styleUrls: ['./delivery-label-list.component.less']
})
export class DeliveryLabelListComponent {
  @Input() tabList: QueryList<DeliveryTypeComponent>;
  @ViewChildren(DeliveryLabelComponent)
  public labelList: QueryList<DeliveryLabelComponent>;

  onActive($event: number) {
    this.labelList.forEach((label: DeliveryLabelComponent, i: number) => {
      if (i !== $event) {
        label.unSetActive();
      }
    })
  }
}
