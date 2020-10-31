import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
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
  constructor(private http: HttpClient) {}

  getCategories(): Observable<IData[]> {
    return this.http.get<IData[]>(`${environment.apiUrl}/category`)
  }
  getBrends(): Observable<IData[]> {
    return this.http.get<IData[]>(`${environment.apiUrl}/brand`)
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAd[]> {
    return this.loadData();
  }


  loadData():Observable<IAd[]> {
    return forkJoin([
      this.http.get<IData[]>(`${environment.apiUrl}/category`),
      this.http.get<IData[]>(`${environment.apiUrl}/brand`),
      this.http.get<IAd[]>(`${environment.apiUrl}/ad`),
    ]).pipe(
      map(([categories, brends, ads]) => {
        const adsWithCategory = ads.map((ad) => {
          const category = categories.find(one => one._id === ad.category).name;
          const brand = brends.find(one => one._id === ad.brand).name;
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
