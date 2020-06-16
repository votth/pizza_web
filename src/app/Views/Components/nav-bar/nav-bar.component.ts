import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../Services/user.service';
import {Md5} from 'ts-md5';

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
      this.errorChecker = false;
      console.log('logged in as');
      console.log(this.email);
      console.log(this.password);
      this.userService.loginUser(user);
      this.closeButton.nativeElement.click();
    } else {
      this.errorChecker = true;
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
