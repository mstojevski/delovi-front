import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {environment} from '../../../../../../environments/environment';

interface IContact {
  name: string;
  phone: string;
  email:string;
  city: string;
  _id: string;
}
interface ISingleAd {
  brand: string;
  category: string;
  createdAt: Date;
  description: string;
  favorite: boolean;
  model: string;
  price: number;
  sold: boolean;
  title: string;
  updatedAt: Date;
  year: number;
  user:IContact;
  status:string;
}
@Injectable({
  providedIn: 'root'
})
export class SingleAdService implements Resolve<any> {
  private _singleAdData = new BehaviorSubject<ISingleAd>(null);
  singleData$ = this._singleAdData.asObservable();

  private _adsWithSameCategory = new BehaviorSubject<null>(null);
  adsWithSameCategory$ = this._adsWithSameCategory.asObservable();

  constructor(private http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return forkJoin([
      this.http.get<any>(`${environment.apiUrl}/ad`),
      this.http.get<any[]>(`${environment.apiUrl}/category`),
      this.http.get<any[]>(`${environment.apiUrl}/brand`),

    ]).pipe(
      tap(([ads, categories, brands]) => {
        const ad = ads.find(one => one._id === route.params.id);
        const adsWithSameCategory = ads.filter((one) => one.category === ad.category && one._id !== ad._id).slice(0,4);
        const category = categories.find(one => one._id === ad.category).name;
        const brand = brands.find(one => one._id === ad.brand).name;
        const data = {
          ...ad,
          category,
          brand,
        }
        this._singleAdData.next(data);
        this._adsWithSameCategory.next(adsWithSameCategory);
      })
    )
  }
}
