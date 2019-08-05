import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent implements OnInit {

    public todo$: Todo;

    constructor() { 
      this.todo$ = {
        id: undefined,
        label: undefined,
        status: false,
        position: undefined
      };
    }

    ngOnInit() {
      
    }

    public createToDo(event?: any): void{
      console.log(this.todo$);
      this.todo$ = {
        id: undefined,
        label: undefined,
        status: false,
        position: undefined
      };
    }

}
