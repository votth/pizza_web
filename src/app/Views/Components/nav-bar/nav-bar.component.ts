import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../Services/user.service';
import {Md5} from 'ts-md5';
import {User} from '../../../Models/Users';
import {AuthGuard} from '../../../Guards/auth.guard';
import {ShoppingBasketService} from '../../../Services/shopping-basket.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('closeButton') closeButton;

  email: string;
  password;
  errorChecker = false;
  getLoggedIn: string;
  getLoggedInUser: User;

  constructor(private userService: UserService, private basketService: ShoppingBasketService) {
    this.getLoggedIn = userService.getLoginToken();
    this.getLoggedInUser = userService.getLoggedInUser();
    console.log(this.getLoggedIn);
  }

  ngOnInit(): void {
  }

  // Login lekezelése submit onClick-re (reworked)
  onSubmit(value: any) {
    this.email = value.email;
    this.password = value.password;

    this.password = Md5.hashStr(this.password); // input password encryptelése md5-tel.

    const user = this.userService.findUser(this.email, this.password);
    if (user !== undefined) {
      this.errorChecker = false;
      console.log('logged in as');
      console.log(this.email);
      console.log(this.password);
      this.userService.loginUser(user);
      this.closeButton.nativeElement.click();
      this.getLoggedInUser = this.userService.getLoggedInUser();
    } else {
      this.errorChecker = true;
      console.log('not logged in, values: ');
      console.log(this.email);
      console.log(this.password);
    }

    this.getLoggedIn = this.userService.getLoginToken();
    console.log(this.getLoggedIn);
  }

  logOut(): void {
    this.userService.logoutUser();
  }

  emptyBasket(): void {
    this.basketService.emtpyBasket(this.getLoggedInUser.shoppingBasket);
    this.userService.refreshUser(this.getLoggedInUser);
  }

  navigate(page: Event) {
    console.log(page.target);
  }

}
