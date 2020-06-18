import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {AbstractListComponent} from '../abstract-list/abstract-list.component';
import {Pizza} from '../../../Models/Pizza';
import {pizzas} from '../../../HardDatabase/DatabaseHelper';
import {User} from '../../../Models/Users';
import {UserService} from '../../../Services/user.service';
import {ShoppingBasketService} from '../../../Services/shopping-basket.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent extends AbstractListComponent<Pizza> implements OnInit, AfterContentChecked{

  constructor(private userService: UserService, private basketService: ShoppingBasketService) {
    super();
  }

  selectedDough = 'empty';
  buyingUser: User = this.userService.getLoggedInUser();
  buyPizza: Pizza;
  loggedIn: string;

  sortArray(param: string): void {
    super.sortArray(param);
    switch (param) {
      case 'IdAsc':
        this.filteredList.sort(((a, b) => a.id - b.id ));
        break;
        case 'IdDesc':
        this.filteredList.sort(((a, b) => b.id - a.id ));
        break;
    }
  }

  // Pizzavásárlás
  buyItem(id: number): void {
    if (this.loggedIn) {
      const findPizza: Pizza[] = pizzas.filter((p) => p.id === id);
      this.buyPizza = findPizza[0]; // Id alapján find pizza
      this.basketService.pushPizzaToBasket(this.buyPizza, this.buyingUser.shoppingBasket);
      this.userService.refreshUser(this.buyingUser); // shoppingbasket-be push
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(pizzas);
    this.filteredList = this.list;
    this.loggedIn = this.userService.getLoginToken();
  }

  // Always Up-To-Date initializer
  ngAfterContentChecked(): void {
    if (this.buyingUser !== this.userService.getLoggedInUser()) {
      this.buyingUser = this.userService.getLoggedInUser();
    }
    if (this.loggedIn !== this.userService.getLoginToken()) {
      this.loggedIn = this.userService.getLoginToken();
    }
  }

}
