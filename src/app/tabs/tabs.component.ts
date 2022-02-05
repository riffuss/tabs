import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

  constructor(private readonly controlContainer: ControlContainer) { }

  ngOnInit() {
    console.log(this.controlContainer);
  }

}
