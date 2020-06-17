import { Component, OnInit } from '@angular/core';
import {AbstractListComponent} from '../abstract-list/abstract-list.component';
import {Pizza} from '../../../Models/Pizza';
import {pizzas} from '../../../HardDatabase/DatabaseHelper';
import {User} from '../../../Models/Users';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent extends AbstractListComponent<Pizza> implements OnInit{

  constructor() {
    super();
  }

  buyPizza: Pizza;
  selectedDough = 'empty';

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

  // Pizzavásárlás
  buyItem(id: number): void {
    const findPizza: Pizza[] = pizzas.filter((p) => p.id === id);
    this.buyPizza = findPizza[0]; // Id alapján find pizza
    if (this.buyPizza.dough === ''){ return; } // if dough is not selected return
    this.buyingUser.shoppingBasket.pizzas.push(this.buyPizza);
    localStorage.setItem('loggedInUser', JSON.stringify(this.buyingUser)); // shoppingbasket-be push
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(pizzas);
    this.filteredList = this.list;
  }

}
