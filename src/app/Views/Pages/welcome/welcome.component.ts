import {AfterContentChecked, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../Services/user.service';

import {AbstractListComponent} from '../../Components/abstract-list/abstract-list.component';
import {Pizza} from '../../../Models/Pizza';
import {pizzas} from '../../../HardDatabase/DatabaseHelper';
import {OrderService} from '../../../Services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AbstractListComponent<Pizza> implements OnInit, AfterContentChecked {

  @ViewChild('buttonClose') buttonClose;
  @ViewChild('buttonHere') buttonHere;

  constructor(private userService: UserService, private orderService: OrderService, private router: Router) {
    super();
  }

  orderType: string;

  // sort by rating desc = trending
  sortArray(): void {
    this.filteredList.sort(((a, b) => b.rating - a.rating));
  }

  hereButtonClicked(): void {
    if (this.orderService.getOrderType()) {
      this.orderService.setOrderHere();
      this.orderService.deleteAddress();
    }
  }

  homeOrderButtonClicked(): void {
    if (this.orderService.getOrderType()) {
      this.orderService.setOrderToUser();
    }
  }

  navigateIfLoggedIn(): void {
    if (this.orderService.getOrderType()) {
      this.router.navigate(['/menu']);
    }
  }

  closeButtonClicked(): void {
    if (this.orderService.getOrderType() !== 'orderToUser') {
      this.orderService.deleteAddress();
    }
  }

  onSubmit(value: any) {
    this.orderService.deleteAddress();
    this.orderService.initAddress(value.address, value.city, value.county, value.zipCode);
    this.router.navigate(['/menu']);
    this.buttonClose.nativeElement.click();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(pizzas);
    this.filteredList = this.list;
    this.sortArray();
    this.orderType = this.orderService.getOrderType();
  }

  ngAfterContentChecked(): void {
    if (this.orderType !== this.orderService.getOrderType()) {
      this.orderType = this.orderService.getOrderType();
    }
  }

  navigate(page: Event) {
    console.log(page.target);
  }
}
