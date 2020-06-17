import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  pageTitle: string;
  currPage: string;
  btnPassive = 'btn btn-light p-btn pr-3 pl-3 border-0 bg-half-light';
  btnActive = 'btn btn-dark p-btn pr-3 pl-3 border-0 bg-half-dark';

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
