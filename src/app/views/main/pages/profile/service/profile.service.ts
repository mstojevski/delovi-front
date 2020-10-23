import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface IUserInfo {
  email: string;
  name: string;
  phone: string;
  city: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<IUserInfo> {
    return this.http.get<IUserInfo>(`${environment.apiUrl}/users/${id}`);
  }

  loadData(id: string) {
    return forkJoin([
      this.http.get<any[]>(`${environment.apiUrl}/category`),
      this.http.get<any[]>(`${environment.apiUrl}/brand`),
      this.http.get<any[]>(`${environment.apiUrl}/ad/${id}`),
    ]).pipe(
      map(([categories,brands, ads]) => {
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
