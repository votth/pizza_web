import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../Services/user.service';
import {Md5} from 'ts-md5';
import {User} from '../../../Models/Users';
import {AuthGuard} from '../../../Guards/auth.guard';

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
  getLoggedIn;
  getLoggedInUser: User;

  constructor(private userService: UserService) {
    this.getLoggedIn = localStorage.getItem('loggedIn');
    this.getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
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
      this.getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    } else {
      this.errorChecker = true;
      console.log('not logged in, values: ');
      console.log(this.email);
      console.log(this.password);
    }

    this.getLoggedIn = localStorage.getItem('loggedIn');
    console.log(this.getLoggedIn);
  }

  logOut(): void {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggedIn');
  }

  emptyBasket(): void {
    this.getLoggedInUser.shoppingBasket.pizzas = undefined;
    this.getLoggedInUser.shoppingBasket.drinks = undefined;
    /*this.getLoggedInUser.shoppingBasket.sumPrice = 0;*/
    localStorage.setItem('loggedInUser', JSON.stringify(this.getLoggedInUser));
  }

  navigate(page: Event) {
    console.log(page.target);
  }

}
