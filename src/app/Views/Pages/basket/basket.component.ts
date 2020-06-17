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

  constructor(private basketService: ShoppingBasketService, private userService: UserService) { }

  ngOnInit(): void {
    const loggedInUser = this.userService.getLoggedInUser();
    const basketPizzas: Pizza[] = this.basketService.getBasketPizzas(loggedInUser.shoppingBasket);
    const basketDrinks: Drink[] = this.basketService.getBasketDrinks(loggedInUser.shoppingBasket);
    
    console.log(loggedInUser);
    console.log(basketPizzas);
    console.log(basketDrinks);

    this.basketPizzas = basketPizzas;
    this.basketDrinks = basketDrinks;
  }

  navigate(page: Event) {
    console.log(page.target);
  }
}
