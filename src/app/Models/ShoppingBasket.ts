import {Pizza} from './Pizza';
import {Drink} from './Drink';

export class ShoppingBasket {
  pizzas: Pizza[];
  drinks: Drink[];
  sumPrice: number;

  constructor(pizzas: Pizza[] = [], drinks: Drink[] = [], sumPrice: number = 0) {
    this.pizzas = pizzas;
    this.drinks = drinks;
    this.sumPrice = sumPrice;
  }
}
