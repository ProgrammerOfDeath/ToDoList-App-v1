import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTodoComponent } from './template/template-todo/template-todo.component';
import { TemplateTodoFormComponent } from './template/template-todo-form/template-todo-form.component';
import { TemplateTodoHeaderComponent } from './template/template-todo-header/template-todo-header.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent,
    TemplateTodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
