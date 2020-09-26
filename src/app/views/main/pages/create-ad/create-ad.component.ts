import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss'],
})
export class CreateAdComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Osnovne Informacije',
        routerLink: 'info',
      },
      {
        label: 'Dodatne Informacije',
        routerLink: 'more-info',
      },

      {
        label: 'Dodaj Slike',
        routerLink: 'upload-images',
      },
    ];
  }
}
