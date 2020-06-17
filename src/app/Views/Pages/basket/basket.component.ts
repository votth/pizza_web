import { Component, OnInit } from '@angular/core';
import {ShoppingBasketService} from '../../../Services/shopping-basket.service';
import { Pizza } from '../../../Models/Pizza';
import { Drink } from '../../../Models/Drink';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketPizzas: any;
  basketDrinks: any;
  basketPrice: number;

  constructor(private basketService: ShoppingBasketService, private userService: UserService) { }

  ngOnInit(): void {
    const loggedInUser = this.userService.getLoggedInUser();
    const basketPizzas: Pizza[] = this.basketService.getBasketPizzas(loggedInUser.shoppingBasket);
    const basketDrinks: Drink[] = this.basketService.getBasketDrinks(loggedInUser.shoppingBasket);
    const basketPrice: number = this.basketService.getBasketPrice(loggedInUser.shoppingBasket);

    console.log(loggedInUser);
    console.log(basketPizzas);
    console.log(basketDrinks);
    console.log(basketPrice);

    this.basketPizzas = basketPizzas;
    this.basketDrinks = basketDrinks;
    this.basketPrice = basketPrice;
  }

  navigate(page: Event) {
    console.log(page.target);
  }

  // sumPrice(): number {
  //   this.basketPizzas.forEach(element => { 
  //     this.basketPrice += this.basketPizzas[element].price;
  //   });
  //   this.basketDrinks.forEach(element => { 
  //     this.basketPrice += this.basketDrinks[element].price;
  //   });

  //   return this.basketPrice;
  // }
}
