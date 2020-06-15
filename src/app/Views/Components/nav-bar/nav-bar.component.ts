import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  email = '';
  password = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  validation(): void {
    if (this.email === 'test@test.hu' && this.password === 'test') {
      console.log('logged in as');
      console.log(this.email);
      console.log(this.password);
      localStorage.setItem('loggedIn', JSON.stringify(true));
    } else {
      console.log('not logged in, values: ');
      console.log(this.email);
      console.log(this.password);
      sessionStorage.setItem('loggedIn', null);
    }
  }

  navigate(page: Event) {
    console.log(page.target);
  }

}
