import {Ingredient} from './Ingredient';

export class Pizza {
  id: number;
  name: string;
  dough: string;
  ingredients: Ingredient[];
  price: number;
  rating: number;

  constructor(
    id: number = -1,
    name: string = '',
    ingredients: Ingredient[] = [],
    price: number = 0) {

    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
}
