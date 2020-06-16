import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../Models/Pizza';
import {Drink} from '../../Models/Drink';

export abstract class AbstractListComponent<T extends Pizza | Drink> implements OnInit {

  // tslint:disable-next-line:variable-name
  private _listFilter: string;
  list: T[] = [];
  filteredList: T[] = [];
  sortParam: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredList = this.listFilter ? this.performFilter(this.listFilter) : this.list;
  }

  sortArray(param: string): void{
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
  }

}
