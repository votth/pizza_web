import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5';
import {UserService} from '../../../Services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  registerClick(): void {
    this.fullname = this.firstname + ' ' + this.lastname;
    this.password = Md5.hashStr(this.password);
    this.passwordagain = Md5.hashStr(this.passwordagain);
    this.userService.registerUser(this.fullname, this.nickname, this.email, this.password);
    console.log(this.fullname);
    console.log(this.nickname);
    console.log(this.email);
    console.log(this.password);
    console.log(this.passwordagain);
  }

}
