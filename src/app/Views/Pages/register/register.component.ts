import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';
import {UserService} from '../../../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstname: string;
  lastname: string;
  fullname: string;
  nickname: string;
  email: string;
  password;
  passwordagain;
  errorChecker: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  // Submit gomb clickre futó function (Értékek átadása, titkosítás és user regisztrálása).
  onSubmit(value: any) {
    console.log(value);
    console.log(value.registerNickname);
    this.firstname = value.registerFirstName;
    this.lastname = value.registerLastName;
    this.nickname = value.registerNickname;
    this.email = value.registerEmail;
    this.password = value.registerPassword;
    this.passwordagain = value.registerPasswordAgain;

    if (this.userService.findUserByEmail(this.email) !== undefined) {
      this.errorChecker = 'userExists';
    } else {
      this.fullname = this.firstname + ' ' + this.lastname;
      this.password = Md5.hashStr(this.password);
      this.passwordagain = Md5.hashStr(this.passwordagain);
      this.userService.registerUser(this.fullname, this.nickname, this.email, this.password);

      console.log(this.fullname);
      console.log(this.nickname);
      console.log(this.email);
      console.log(this.password);
      console.log(this.passwordagain);

      this.router.navigate(['']);
    }
  }

}
