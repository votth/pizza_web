import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  navigate(page: Event) {
    console.log(page.target);
  }

}
