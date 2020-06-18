import {Injectable} from '@angular/core';
import {Address} from '../Models/address';
import {ShoppingBasketService} from './shopping-basket.service';
import {User} from '../Models/Users';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private basketService: ShoppingBasketService) { }

  initOrder(): void {
    if (!localStorage.getItem('orderType')) {
      localStorage.setItem('orderType', 'nonOrder');
    }
  }

  getOrderType(): string {
    let orderType: string;
    if (localStorage.getItem('orderType')) {
      orderType = localStorage.getItem('orderType');
      return orderType;
    } else {
      return undefined;
    }
  }

  setOrderHere(): void {
    if (localStorage.getItem('orderType')) {
      localStorage.setItem('orderType', 'orderHere');
    }
  }

  setOrderToUser(): void {
    if (localStorage.getItem('orderType')) {
      localStorage.setItem('orderType', 'orderToUser');
    }
  }

  flushOrder(): void {
    if (localStorage.getItem('orderType')) {
      localStorage.setItem('orderType', 'nonOrder');
    }
  }

  deleteOrder(): void {
    if (localStorage.getItem('orderType')) {
      localStorage.removeItem('orderType');
    }
  }

  initAddress(address: string, city: string, county: string, zipCode: number): void {
    const orderAddress = new Address(address, city, county, zipCode);
    if (!localStorage.getItem('orderAddress')) {
      localStorage.setItem('orderAddress', JSON.stringify(orderAddress));
    }
  }

  getAddress(): Address {
    let orderAddress: Address;
    if (localStorage.getItem('orderAddress')) {
      orderAddress = JSON.parse(localStorage.getItem('orderAddress'));
      return orderAddress;
    } else {
      return undefined;
    }
  }

  deleteAddress(): void {
    if (localStorage.getItem('orderAddress')) {
      localStorage.removeItem('orderAddress');
    }
  }

  sendHereOrder(user: User, phone: number, contactName: string, payment: string): void {
    console.log('*Send order to restaurant:');
    console.log('User: ', user.name, '; ' , user.email);
    console.log('Contact: ', contactName, '; Phone: ', phone);
    console.log('Order type: Takeout');
    console.log('Orders:');
    console.log(user.shoppingBasket.pizzas, user.shoppingBasket.drinks);
    console.log('Price: ', user.shoppingBasket.sumPrice);
    console.log('Payment method: ', payment);
    this.basketService.emtpyBasket(user.shoppingBasket);
    this.flushOrder();
  }

  sendToUserOrder(user: User, address: Address, phone: number, contactName: string, payment: string): void {
    console.log('*Send order to restaurant:');
    console.log('User: ', user.name, '; ' , user.email);
    console.log('Contact: ', contactName, '; Phone: ', phone);
    console.log('Order type: To User');
    console.log('Address: ', address.county, ', ', address.city, ', ', address.zipCode, '; ', address.address);
    console.log('Orders:');
    console.log(user.shoppingBasket.pizzas, user.shoppingBasket.drinks);
    console.log('Price: ', user.shoppingBasket.sumPrice);
    console.log('Payment method: ', payment);
    this.basketService.emtpyBasket(user.shoppingBasket);
    this.deleteAddress();
    this.flushOrder();
  }
}
