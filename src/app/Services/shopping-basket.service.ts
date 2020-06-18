import { Injectable } from '@angular/core';
import { ShoppingBasket } from '../Models/ShoppingBasket';
import {Pizza} from '../Models/Pizza';
import {Drink} from '../Models/Drink';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  constructor() { }

  // Basket formatáló
  emtpyBasket(basket: ShoppingBasket): void {
    basket.pizzas = [];
    basket.drinks = [];
    basket.sumPrice = 0;
  }

  // Pizza kosárhoz adása
  pushPizzaToBasket(pizza: Pizza, basket: ShoppingBasket) {
    basket.pizzas.push(pizza);
    basket.sumPrice += pizza.price;
  }

  pushDrinkToBasket(drink: Drink, basket: ShoppingBasket) {
    basket.drinks.push(drink);
    basket.sumPrice += drink.price;
  }

  // Basket adatkinyerő
  getBasketPizzas(basket: ShoppingBasket): Pizza[] {
    const basketPizzas = basket.pizzas;
    return basketPizzas;
  }

  getBasketDrinks(basket: ShoppingBasket): Drink[] {
    const basketPizzas = basket.drinks;
    return basketPizzas;
  }

  getBasketPrice(basket: ShoppingBasket): number {
    const basketPrice = basket.sumPrice;
    return basketPrice;
  }
}
