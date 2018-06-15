import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  widgets: any[] = [
    {
      widgetType: 'TodoWidgetComponent',
      uuid: 1234567,
      properties: {/*props here*/}
    },
    {
      widgetType: 'IncidentsWidgetComponent',
      uuid: 8657608,
      properties: {/*props here*/}
    },
    {
      widgetType: 'QAWidgetComponent',
      uuid: 4389980648,
      properties: {/*props here*/}
    }
  ];

  constructor() {}

  ngOnInit() {}

  dragStart(event: Event): void {
    console.log(new Date().toISOString(), 'dragStart');
  }

  dragSuccess(event: Event): void {
    console.log(new Date().toISOString(), 'dragSuccess');
  }

  dragEnd(event: Event): void {
    console.log(new Date().toISOString(), 'dragEnd');
  }
}
