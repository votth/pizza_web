import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../Services/user.service';

import {AbstractListComponent} from '../../Components/abstract-list/abstract-list.component';
import {Pizza} from '../../../Models/Pizza';
import {pizzas} from '../../../HardDatabase/DatabaseHelper';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AbstractListComponent<Pizza> implements OnInit {

  constructor(private userService: UserService) {
    super();
  }

  // sort by rating desc = trending
  sortArray(): void {
    this.filteredList.sort(((a, b) => b.rating - a.rating));

  }

  ngOnInit(): void {
    super.ngOnInit();
    this.list = this.list.concat(pizzas);
    this.filteredList = this.list;
    this.sortArray();
  }

  navigate(page: Event) {
    console.log(page.target);
  }
}
