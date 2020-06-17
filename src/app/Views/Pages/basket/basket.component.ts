import { Component, OnInit } from '@angular/core';
import {ShoppingBasketService} from '../../../Services/shopping-basket.service';
import { Pizza } from '../../../Models/Pizza';
import { Drink } from '../../../Models/Drink';
import {UserService} from '../../../Services/user.service';

// Maybe can just import from the basket and build a list from there?

// import {AbstractListComponent} from '../../Components/abstract-list/abstract-list.component';
// import {Pizza} from '../../../Models/Pizza';
// import {pizzas} from '../../../HardDatabase/DatabaseHelper';
// import {Drink} from '../../../Models/Drink';
// import {drinks} from '../../../HardDatabase/DatabaseHelper';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

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
  }

  navigate(page: Event) {
    console.log(page.target);
  }
}
