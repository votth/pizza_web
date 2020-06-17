import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-five-star',
  templateUrl: './five-star.component.html',
  styleUrls: ['./five-star.component.css']
})
export class FiveStarComponent implements OnInit {

  @Input() rating = 0;
  starWidth = 0;

  constructor() { }

  ngOnInit(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
