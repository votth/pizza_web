import {Ingredient} from './Ingredient';

export class Pizza {
  id: number;
  name: string;
  ingredients: Ingredient[];
  price: number;

  constructor(
    id: number = 0,
    name: string = '',
    ingredients: Ingredient[] = [],
    price: number = 0) {

    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
}
