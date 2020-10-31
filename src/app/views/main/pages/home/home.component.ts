import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService, IData } from './service/home.service';
import { Observable, Subscription } from 'rxjs';
import { IAd } from 'src/app/models/ad.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {
  brands$: Observable<IData[]> = this.homeService.brands$;
  categories$: Observable<IData[]> = this.homeService.categories$;
  ads:IAd[];
  adsSubscription: Subscription;


  constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
   this.adsSubscription = this.activatedRoute.data.subscribe(data => this.ads = data.ads);

  }

  ngOnDestroy() {
    this.adsSubscription.unsubscribe();
  }

}
