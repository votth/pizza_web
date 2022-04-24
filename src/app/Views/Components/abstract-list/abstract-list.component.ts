import { Component, OnInit, Directive } from '@angular/core';
import {Pizza} from '../../../Models/Pizza';
import {Drink} from '../../../Models/Drink';
import {User} from '../../../Models/Users';

@Directive()
export abstract class AbstractListComponent<T extends Pizza | Drink> implements OnInit {

  buyingUser: User = JSON.parse(localStorage.getItem('loggedInUser'));

  // tslint:disable-next-line:variable-name
  private _listFilter: string;
  list: T[] = [];
  filteredList: T[] = [];
  sortParam: string;
  currSortParam: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredList = this.listFilter ? this.performFilter(this.listFilter) : this.list;
    this.sortArray(this.currSortParam);
  }

  sortArray(param: string): void{
    this.currSortParam = param;
    switch (param) {
      case 'PAsc':
        this.filteredList.sort(((a, b) => a.price - b.price ));
        break;
      case 'PDesc':
        this.filteredList.sort(((a, b) => b.price - a.price ));
        break;
      case 'RAsc':
        this.filteredList.sort(((a, b) => a.rating - b.rating ));
        break;
      case 'RDesc':
        this.filteredList.sort(((a, b) => b.rating - a.rating ));
        break;
    }
  }

  buyItem(id: number): void {
    alert(`id: ${this.findItem(id).id}\nName: ${this.findItem(id).name}\nPrice: ${this.findItem(id).price}`);
    console.table(this.findItem(id));
  }

  findItem(id): T {
    const temp = this.list.filter(data => data.id === id);
    return temp[0];
  }

  performFilter(filterBy: string): T[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.list.filter((data: T) =>
      data.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  protected constructor() { }

  ngOnInit(): void {
    this.sortParam = 'empty';
    if (this.buyingUser !== null) {
      console.log('tryingtouser');
      if (this.buyingUser.shoppingBasket.pizzas === undefined) {
        this.buyingUser.shoppingBasket.pizzas = []; // local pizza shopping list inicializálása (ha nincs)
      }
      if (this.buyingUser.shoppingBasket.drinks === undefined) {
        this.buyingUser.shoppingBasket.drinks = []; // local drink shopping list inicializálása (ha nincs)
      }
      if (this.buyingUser.shoppingBasket.sumPrice === undefined) {
        this.buyingUser.shoppingBasket.sumPrice = 0; // local sumPrice inicializálása (ha nincs)
      }
    }
  }

}
