import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DndModule} from '@beyerleinf/ngx-dnd';

import {AppComponent} from './app.component';
import {IssueTwoComponent} from './issue-2';
import {ChildComponent, IncidentsComponent, ParentComponent, QaComponent, TodoComponent} from './issue-2/';
import {IssueFourtyfourComponent} from './issue-44';
import {RestrictedSortableZonesInterpolationComponent} from './issue-48';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    IncidentsComponent,
    QaComponent,
    TodoComponent,
    IssueFourtyfourComponent,
    IssueTwoComponent,
    RestrictedSortableZonesInterpolationComponent,
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    IncidentsComponent,
    QaComponent,
    TodoComponent,
  ]
})
export class AppModule {
}
