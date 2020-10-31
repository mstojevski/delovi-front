import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAd } from 'src/app/models/ad.interface';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
export interface IData {
  _id: string;
  name:string;
}
@Injectable({
  providedIn: 'root',
})
export class HomeService implements Resolve<Observable<IAd[]>> {
  private _categories = new BehaviorSubject<IData[]>([]);
  categories$ = this._categories.asObservable();

  private _brands = new BehaviorSubject<IData[]>([]);
  brands$ = this._brands.asObservable();


  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAd[]> {
    return forkJoin([
      this.http.get<IData[]>(`${environment.apiUrl}/category`),
      this.http.get<IData[]>(`${environment.apiUrl}/brand`),
      this.http.get<IAd[]>(`${environment.apiUrl}/ad`),
    ]).pipe(
      map(([categories, brands, ads]) => {
        this._brands.next(brands);
        this._categories.next(categories);
        const adsWithCategory = ads.map((ad) => {
          const category = categories.find(one => one._id === ad.category).name;
          const brand = brands.find(one => one._id === ad.brand).name;
          return {
            ...ad,
            category,
            brand
          }
        })
        return adsWithCategory;
      })
    )
  }
}
