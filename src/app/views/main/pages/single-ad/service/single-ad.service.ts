import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {environment} from '../../../../../../environments/environment';
import { IAd } from 'src/app/models/ad.interface';
import { IData } from '../../home/service/home.service';


@Injectable({
  providedIn: 'root'
})
export class SingleAdService implements Resolve<any> {
  private _singleAdData = new BehaviorSubject<IAd>(null);
  singleData$ = this._singleAdData.asObservable();

  private _adsWithSameCategory = new BehaviorSubject<IAd[]>(null);
  adsWithSameCategory$ = this._adsWithSameCategory.asObservable();

  constructor(private http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return forkJoin([
      this.http.get<IAd[]>(`${environment.apiUrl}/ad`),
      this.http.get<IData[]>(`${environment.apiUrl}/category`),
      this.http.get<IData[]>(`${environment.apiUrl}/brand`),

    ]).pipe(
      tap(([ads, categories, brands]) => {
        const ad = ads.find(one => one._id === route.params.id);
        const category = categories.find(one => one._id === ad.category).name;
        const brand = brands.find(one => one._id === ad.brand).name;

        const images = ad.images.map((one => {
          return {
            previewImageUrl: one
          }
        }))
        const data = {
          ...ad,
          category,
          brand,
          images
        }
        console.log('ad', ad);
        const adsCategory = ads.filter((one) => one.category === ad.category && one._id !== ad._id)

        const adsWithCategoryBrands = adsCategory.map((ad) => {
          const category = categories.find(one  => one._id === ad.category).name;
          const brand = brands.find(one  => one._id === ad.brand).name;
          return {
            ...ad,
            category,
            brand
          }
        })
        this._singleAdData.next(data);
        this._adsWithSameCategory.next(adsWithCategoryBrands);
      })
    )
  }
  setStatusSold(id:string) {
    return this.http.put(`${environment.apiUrl}/ad/${id}`, {sold: true});
  }
}
