import { Component, OnInit } from '@angular/core';
import {drinks} from '../../HardDatabase/DatabaseHelper';
import {Drink} from '../../Models/Drink';
import {AbstractListComponent} from '../abstract-list/abstract-list.component';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent extends AbstractListComponent<Drink> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(drinks);
    this.filteredList = this.list;
  }
}
