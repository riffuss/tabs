import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabLabelComponent } from '../tab-label/tab-label.component';

@Component({
  selector: 'app-tab-label-list',
  templateUrl: './tab-label-list.component.html',
  styleUrls: ['./tab-label-list.component.less']
})
export class TabLabelListComponent {
  @Input() tabList: QueryList<TabComponent>;
  @ViewChildren(TabLabelComponent)
  public labelList: QueryList<TabLabelComponent>;

  onActive($event: number) {
    this.labelList.forEach((label: TabLabelComponent, i: number) => {
      if (i !== $event) {
        label.unSetActive();
      }
    })
  }
}
