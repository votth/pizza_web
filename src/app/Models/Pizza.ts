import {Ingredient} from './Ingredient';

export class Pizza {
  id: number;
  name: string;
  dough: string;
  ingredients: Ingredient[];
  ingredientsId: number[];
  price: number;
  rating: number;

  constructor(
    id: number = 0,
    name: string = '',
    ingredients: Ingredient[] = [],
    ingredientsId: number[],
    price: number = 0) {

    this.ingredientsId = ingredientsId;
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
}
