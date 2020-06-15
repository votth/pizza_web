import { Component, OnInit } from '@angular/core';
import {ingredients} from '../../HardDatabase/DatabaseHelper';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(ingredients);
  }

}
