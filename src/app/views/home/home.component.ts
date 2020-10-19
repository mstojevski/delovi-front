import { Component, OnInit } from '@angular/core';
import { HomeService, IData } from './service/home.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';
import { IAd } from 'src/app/models/ad.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  brands$: Observable<IData[]>
  categories$: Observable<IData[]>;
  ads$:Observable<IAd[]>;


  constructor(private homeService: HomeService, private auth:AuthService) {}

  ngOnInit() {
    this.ads$ = this.homeService.loadData();
    this.categories$ = this.homeService.getCategories();
    this.brands$ = this.homeService.getBrends();

  }

}
