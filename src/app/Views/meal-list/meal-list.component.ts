import { Component, OnInit } from '@angular/core';
import {AbstractListComponent} from '../abstract-list/abstract-list.component';
import {Pizza} from '../../Models/Pizza';
import {pizzas} from '../../HardDatabase/DatabaseHelper';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent extends AbstractListComponent<Pizza> implements OnInit{

  constructor() {
    super();
  }

  sortArray(param: string): void {
    super.sortArray(param);
    switch (param) {
      case 'IdAsc':
        this.filteredList.sort(((a, b) => a.id - b.id ));
        break;
        case 'IdDesc':
        this.filteredList.sort(((a, b) => b.id - a.id ));
        break;
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(pizzas);
    this.filteredList = this.list;
  }

}
