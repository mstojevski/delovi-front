import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../../../auth.service';

export interface IUserInfo {
  email: string;
  name: string;
  phone: string;
  city: string;
  reviews:{reviewerId: string, rating: string, description: string, reviewerName: string, adTitle: string, adId: string}
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _reviews = new BehaviorSubject<any>([])
  reviews$ = this._reviews.asObservable();
  private _rating = new BehaviorSubject<number>(0)
  rating$ = this._rating.asObservable();
  constructor(private http: HttpClient, private auth: AuthService) { }

  getUser(id: string): Observable<IUserInfo> {
    return this.http.get<IUserInfo>(`${environment.apiUrl}/users/${id}`);
  }
  rate(rating, id) {
    return this.http.post(`${environment.apiUrl}/users/${id}`, {rating}).pipe(
      tap((one) => this._reviews.value.push(one))
    )
  }

  loadData(id: string) {
    return forkJoin([
      this.http.get<any[]>(`${environment.apiUrl}/category`),
      this.http.get<any[]>(`${environment.apiUrl}/brand`),
      this.http.get<any[]>(`${environment.apiUrl}/ad/${id}`),
      this.http.get(`${environment.apiUrl}/users/reviews/${id}`)
    ]).pipe(
      map(([categories, brands, ads, reviews]) => {
        const adsWithCategory = ads.map((ad) => {
          const category = categories.find(one => one._id === ad.category).name;
          const brand = brands.find(one => one._id === ad.brand).name;
          this._reviews.next(reviews[0]);
          const ratings = this._reviews.value.map((one) => one.rating);
          const sum = ratings.reduce((acc, curr) => acc + curr, 0)
          this._rating.next(sum / ratings.length);
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
