import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interface/todo';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

    public todo$: Todo;


    constructor() {
        this.todo$ = {
          id: 1,
          label: 'Wie gehts',
          status: false,
          position: 1
        };
    }

    ngOnInit() {
    }

    public changeCheck(event?: any): void{
        this.todo$.status = !this.todo$.status;
    }

    public changeLabel(event?: any): void{
        //kommt noch
    }

    public deleteToDo(event?: any): void{
        //hier kommt auch noch was
    }

}
