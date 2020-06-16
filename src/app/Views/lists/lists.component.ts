import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  pageTitle: string;
  currPage: string;
  btnActive = 'btn btn-primary';
  btnPassive = 'btn btn-dark';

  pageSwitch(param: string): void{
    switch (param) {
      case 'pizzas':
        this.currPage = 'pizzas';
        this.pageTitle = 'Pizza List';
        break;
      case 'drinks':
        this.currPage = 'drinks';
        this.pageTitle = 'Drink List';
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.pageSwitch('pizzas');
  }

}
