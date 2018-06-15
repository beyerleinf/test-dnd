import {Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';

import {IncidentsComponent} from '../incidents/incidents.component';
import {QaComponent} from '../qa/qa.component';
import {TodoComponent} from '../todo/todo.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() widgetType: string|any;

  @Input() properties = {};

  @Input() uuid: number;

  @Output() edit: EventEmitter<number> = new EventEmitter();

  @Output() delete: EventEmitter<number> = new EventEmitter();

  @ViewChild('target', {read: ViewContainerRef}) target;

  private widgetRef: any;

  private editWidget = (uuid: number) => this.edit.emit(uuid);
  private deleteWidget = (uuid: number) => this.delete.emit(uuid);

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.resolveComponentType(this.widgetType);
  }

  private resolveComponentType(widgetType: string): void {
    switch (widgetType) {
      case 'IncidentsWidgetComponent':
        this.createComponent(IncidentsComponent);
        break;
      case 'QAWidgetComponent':
        this.createComponent(QaComponent);
        break;
      case 'TodoWidgetComponent':
        this.createComponent(TodoComponent);
        break;
      default:
        break;
    }
  }

  createComponent(componentType: any) {
    this.target.clear();
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.widgetRef = this.target.createComponent(factory);

    this.widgetRef.instance['size'] = this.properties['size'] || 1;
    this.widgetRef.instance['uuid'] = this.uuid;
    this.widgetRef.instance['properties'] = this.properties;
    this.widgetRef.instance['editWidget'] = this.editWidget;
    this.widgetRef.instance['deleteWidget'] = this.deleteWidget;
    this.widgetRef.changeDetectorRef.detectChanges();
  }
}
