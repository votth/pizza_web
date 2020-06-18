import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingBasketService} from '../../../Services/shopping-basket.service';
import { Pizza } from '../../../Models/Pizza';
import { Drink } from '../../../Models/Drink';
import {UserService} from '../../../Services/user.service';
import {OrderService} from '../../../Services/order.service';
import {User} from '../../../Models/Users';
import {Address} from '../../../Models/address';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, AfterViewChecked {

  @ViewChild('buttonClose') buttonClose;

  basketPizzas: any;
  basketDrinks: any;
  basketPrice: number;

  constructor(private basketService: ShoppingBasketService,
              private userService: UserService,
              private orderService: OrderService,
              private router: Router ) { }

  orderType: string;
  buyingUser: User;
  buyingAddress: Address;

  onSubmit(value: any) {
    if (this.orderType === 'orderHere') {
      this.orderService.sendHereOrder(this.buyingUser, value.phone, value.contactName, value.payment);
      this.userService.refreshUser(this.buyingUser);
      this.buttonClose.nativeElement.click();
      this.router.navigate(['']);
    } else {
      this.orderService.sendToUserOrder(this.buyingUser, this.buyingAddress, value.phone, value.contactName, value.payment);
      this.userService.refreshUser(this.buyingUser);
      this.buttonClose.nativeElement.click();
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {

    // Inicializáció
    this.orderType = this.orderService.getOrderType();
    this.buyingUser = this.userService.getLoggedInUser();
    this.buyingAddress = this.orderService.getAddress();

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

  ngAfterViewChecked(): void {
    if (this.orderType !== this.orderService.getOrderType()) {
      this.orderType = this.orderService.getOrderType();
    }
    if (this.buyingAddress !== this.orderService.getAddress()) {
      this.buyingAddress = this.orderService.getAddress();
    }
    if (this.buyingUser !== this.userService.getLoggedInUser()) {
      this.buyingUser = this.userService.getLoggedInUser();
    }
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
