import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeService, IData } from './service/home.service';
import { IAd } from 'src/app/models/ad.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  brands$: Observable<IData[]> = this.homeService.brands$;
  categories$: Observable<IData[]> = this.homeService.categories$;
  ads$: Observable<IAd[]>;
  filteredData$:Observable<IAd[]>;

  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ads$ = this.activatedRoute.data.pipe(map((data) => data.ads));
    this.filteredData$ = this.ads$;
  }
  onCategoryChange(event) {
    this.filteredData$ = this.ads$.pipe(
      map((data) => data.filter(one => {
        if(event) {
          return one.categoryId === event._id
        } else {
          return one;
        }
      })
    ))
  }
  onBrandChange(event) {
    this.filteredData$ = this.ads$.pipe(
      map((data) => data.filter(one => {
        if(event) {
          return one.brandId === event._id
        } else {
          return one;
        }
      })
    ))
  }
}
