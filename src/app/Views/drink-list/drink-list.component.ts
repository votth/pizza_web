import { Component, OnInit } from '@angular/core';
import {drinks} from '../../HardDatabase/DatabaseHelper';
import {Drink} from '../../Models/Drink';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  private _listFilter: string;
  drinkList: Drink[] = [];
  filteredDrinkList: Drink[] = [];
  sortParam: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredDrinkList = this.listFilter ? this.performFilter(this.listFilter) : this.drinkList;
  }

  performFilter(filterBy: string): Drink[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.drinkList.filter((data: Drink) =>
      data.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  sortArray(param: string): void{
    switch (param) {
      case 'PAsc':
        this.filteredDrinkList.sort(((a, b) => a.price - b.price ));
        break;
      case 'PDesc':
        this.filteredDrinkList.sort(((a, b) => b.price - a.price ));
        break;
      case 'RAsc':
        this.filteredDrinkList.sort(((a, b) => a.rating - b.rating ));
        break;
      case 'RDesc':
        this.filteredDrinkList.sort(((a, b) => b.rating - a.rating ));
        break;
    }
  }

  buyItem(id: number): void{
    alert(`id: ${this.findItem(id).id}\nName: ${this.findItem(id).name}\nPrice: ${this.findItem(id).price}`);
    console.table(this.findItem(id));
  }

  findItem(id): Drink{
    const temp = this.drinkList.filter(data => data.id === id);
    return temp[0];
  }

  constructor() { }

  ngOnInit(): void {
    this.sortParam = 'empty';
    this.drinkList = this.drinkList.concat(drinks);
    this.filteredDrinkList = this.drinkList;
  }
}
