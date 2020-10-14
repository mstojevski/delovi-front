import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../../environments/environment'
import { IAd } from 'src/app/models/ad.interface';
export interface IData {
  _id: string;
  name:string;
}
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<IData[]> {
    return this.http.get<IData[]>(`${environment.apiUrl}/category`)
  }
  getBrends(): Observable<IData[]> {
    return this.http.get<IData[]>(`${environment.apiUrl}/brand`)
  }
  loadData(): Observable<IAd[]> {
    return forkJoin([
      this.http.get<IData[]>(`${environment.apiUrl}/category`),
      this.http.get<IAd[]>(`${environment.apiUrl}/ad`),
    ]).pipe(
      map(([categories, ads]) => {
        const adsWithCategory = ads.map((ad) => {
          const category = categories.find(one => one._id === ad.category).name;
          return {
            ...ad,
            category
          }
        })
        return adsWithCategory;
      })
    )
  }

}
