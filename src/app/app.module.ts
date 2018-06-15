import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DndModule} from '@beyerleinf/ngx-dnd';

import {AppComponent} from './app.component';
import {ChildComponent} from './nested-component/child/child.component';
import {IncidentsComponent} from './nested-component/incidents/incidents.component';
import {ParentComponent} from './nested-component/parent/parent.component';
import {QaComponent} from './nested-component/qa/qa.component';
import {TodoComponent} from './nested-component/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, ParentComponent, IncidentsComponent,
    QaComponent, TodoComponent
  ],
  imports: [BrowserModule, DndModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IncidentsComponent, QaComponent, TodoComponent]
})
export class AppModule {
}
