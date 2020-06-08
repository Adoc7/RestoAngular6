import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jg-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  dogs = [
    { race: 'berger allemand', name: 'Wolfy' },
    { race: 'bulldog anglais', name: 'Mac Fly' },
    { race: 'caniche', name: 'Rasta' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
