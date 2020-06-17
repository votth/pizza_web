import { Component, OnInit } from '@angular/core';

// Maybe can just import from the basket and build a list from there?

// import {AbstractListComponent} from '../../Components/abstract-list/abstract-list.component';
// import {Pizza} from '../../../Models/Pizza';
// import {pizzas} from '../../../HardDatabase/DatabaseHelper';
// import {Drink} from '../../../Models/Drink';
// import {drinks} from '../../../HardDatabase/DatabaseHelper';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigate(page: Event) {
    console.log(page.target);
  }
}
