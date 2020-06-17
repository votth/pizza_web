import { Component, OnInit } from '@angular/core';
import {drinks, pizzas} from '../../HardDatabase/DatabaseHelper';
import {Drink} from '../../Models/Drink';
import {AbstractListComponent} from '../abstract-list/abstract-list.component';
import {User} from '../../Models/Users';
import {Pizza} from '../../Models/Pizza';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent extends AbstractListComponent<Drink> implements OnInit {

  constructor() {
    super();
  }

  buyingUser: User = JSON.parse(localStorage.getItem('loggedInUser'));
  buyDrink;

  // Italvásárlás
  buyItem(id: number): void {
    const findDrink: Drink[] = drinks.filter((d) => d.id === id);
    this.buyDrink = findDrink[0]; // Id alapján find drink
    this.buyingUser.shoppingBasket.drinks.push(this.buyDrink);
    localStorage.setItem('loggedInUser', JSON.stringify(this.buyingUser)); // shoppingbasket-be push
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(drinks);
    this.filteredList = this.list;
    if (this.buyingUser !== null) {
      console.log('tryingtouser');
      if (this.buyingUser.shoppingBasket.drinks === undefined) {
        this.buyingUser.shoppingBasket.drinks = []; // local pizza shopping list inicializálása
      }
    }
  }
}
