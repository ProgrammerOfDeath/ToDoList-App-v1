import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {
  
    public showOpenToDo: boolean
    public showDoneToDo: boolean

    constructor() {
        this.showOpenToDo = true
        this.showDoneToDo = false
    }

    ngOnInit() {
    }

}
