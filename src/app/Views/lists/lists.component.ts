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
    this.currPage = param === 'pizzas' ? 'pizzas' : this.currPage;
    this.currPage = param === 'drinks' ? 'drinks' : this.currPage;
    console.log(this.currPage);
  }

  constructor() { }

  ngOnInit(): void {
    this.currPage = 'pizzas';
  }

}
