import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  burger = 'assets/images/burger.jpg';
  constructor() { }

  ngOnInit() {
  }

}
