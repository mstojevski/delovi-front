import { Component, OnInit } from '@angular/core';
import { HomeService, IData } from './home.service';
import { Subscription, Observable } from 'rxjs';

interface Ad {
  title: string;
  description: string;
  author: string;
  _id: string;
  user: any;
  favorite:boolean;
  createdAt: any;
}
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  categorySubscription: Subscription;
  brands$: Observable<IData[]>
  categories$: Observable<IData[]>;
  ads:Ad[];


  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.categories$ = this.homeService.getCategories();
    this.brands$ = this.homeService.getBrends();

    this.homeService.getAds().subscribe(data => this.ads = data);
  }

}
