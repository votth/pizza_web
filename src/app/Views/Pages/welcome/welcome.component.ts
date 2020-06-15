import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.userService.users);
  }

  navigate(page: Event) {
    console.log(page.target);
  }
}
