import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {drinks} from '../../../HardDatabase/DatabaseHelper';
import {Drink} from '../../../Models/Drink';
import {AbstractListComponent} from '../abstract-list/abstract-list.component';
import {User} from '../../../Models/Users';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent extends AbstractListComponent<Drink> implements OnInit, AfterContentChecked {

  constructor(private userService: UserService) {
    super();
  }

  buyingUser: User = JSON.parse(localStorage.getItem('loggedInUser'));
  buyDrink;

  // Italvásárlás
  buyItem(id: number): void {
    const findDrink: Drink[] = drinks.filter((d) => d.id === id);
    this.buyDrink = findDrink[0]; // Id alapján find drink
    this.buyingUser.shoppingBasket.drinks.push(this.buyDrink);
    this.userService.refreshUser(this.buyingUser); // shoppingbasket-be push
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(drinks);
    this.filteredList = this.list;
    // máté abstract list-ben keresd az if-et
  }

  ngAfterContentChecked(): void {
    if (this.buyingUser !== this.userService.getLoggedInUser()) {
      this.buyingUser = this.userService.getLoggedInUser();
    }
  }
}
