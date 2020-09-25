import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categorySubscription: Subscription;
  // manufactors = [
  //   'Abarth',
  //   'Alfa Romeo',
  //   'Aston Martin',
  //   'Audi',
  //   'Bentley',
  //   'BMW',
  //   'Bugatti',
  //   'Cadillac',
  //   'Chevrolet',
  //   'Chrysler',
  //   'Citroën',
  //   'Dacia',
  //   'Daewoo',
  //   'Daihatsu',
  //   'Dodge',
  //   'Donkervoort',
  //   'DS',
  //   'Ferrari',
  //   'Fiat',
  //   'Fisker',
  //   'Ford',
  //   'Honda',
  //   'Hummer',
  //   'Hyundai',
  //   'Infiniti',
  //   'Iveco',
  //   'Jaguar',
  //   'Jeep',
  //   'Kia',
  //   'KTM',
  //   'Lada',
  //   'Lamborghini',
  //   'Lancia',
  //   'Land Rover',
  //   'Landwind',
  //   'Lexus',
  //   'Lotus',
  //   'Maserati',
  //   'Maybach',
  //   'Mazda',
  //   'McLaren',
  //   'Mercedes-Benz',
  //   'MG',
  //   'Mini',
  //   'Mitsubishi',
  //   'Morgan',
  //   'Nissan',
  //   'Opel',
  //   'Peugeot',
  //   'Porsche',
  //   'Renault',
  //   'Rolls-Royce',
  //   'Rover',
  //   'Saab',
  //   'Seat',
  //   'Skoda',
  //   'Smart',
  //   'SsangYong',
  //   'Subaru',
  //   'Suzuki',
  //   'Tesla',
  //   'Toyota',
  //   'Volkswagen',
  //   'Volvo',
  // ];

  brends: string[];
  categories: string[];

  adCreated = Date.now();

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.categorySubscription = this.homeService.getCategories().subscribe((data) => {
      const names = data.map((item) => item.name);
      this.categories = names;
    });
    this.homeService.getBrends().subscribe((data) => {
      const names = data.map((item) => item.name);
      this.brends = names;
    })
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }
}
