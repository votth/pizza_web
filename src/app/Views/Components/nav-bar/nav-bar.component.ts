import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email = '';
  password = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  validation(): void {
    const user = this.userService.findUser(this.email, this.password);
    if (user !== undefined) {
      console.log('logged in as');
      console.log(this.email);
      console.log(this.password);
      this.userService.loginUser(user);
    } else {
      console.log('not logged in, values: ');
      console.log(this.email);
      console.log(this.password);
      localStorage.setItem('loggedIn', null);
    }
  }

  navigate(page: Event) {
    console.log(page.target);
  }

}
