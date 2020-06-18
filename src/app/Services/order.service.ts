import {Injectable} from '@angular/core';
import {Address} from '../Models/address';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

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
}
