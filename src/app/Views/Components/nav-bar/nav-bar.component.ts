import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../Services/user.service';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email: string;
  password;

  constructor(private userService: UserService) {
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
