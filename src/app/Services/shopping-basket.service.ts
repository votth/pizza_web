import { Injectable } from '@angular/core';
import { ShoppingBasket } from '../Models/ShoppingBasket';

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
}
