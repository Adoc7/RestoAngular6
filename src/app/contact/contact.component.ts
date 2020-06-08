import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  numberToDisplay = '';
  standard = {
    firstName: 'Julien',
    lastName: 'Poiçon',
    role: 'Accueil',
    award: '',
    phoneNumber: '05-98-55-99-50'
  };

  sommelier = {
    firstName: 'Vincent',
    lastName: 'Gouchon',
    role: 'Sommelier',
    award: 'Meilleur Ouvrier de France 2002',
    phoneNumber: '05-98-55-99-59'
  };

  boucher = {
    firstName: 'Jean',
    lastName: 'Némard',
    role: 'Boucher',
    award: 'Meilleur Ouvrier de France 2014',
    phoneNumber: '05-98-55-99-97'
  };
  constructor() { }

  ngOnInit() {
  }

  displayBig(telNumber) {
    console.log(telNumber);
    this.numberToDisplay = telNumber;
  }

}
