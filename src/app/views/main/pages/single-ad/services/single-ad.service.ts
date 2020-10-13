import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
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

  constructor(private http: HttpClient) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return forkJoin([
      this.http.get<any>(`http://localhost:3500/ad/single/${route.params.id}`),
      this.http.get<any[]>(`http://localhost:3500/users`),
      this.http.get<any[]>(`http://localhost:3500/category`),
      this.http.get<any[]>(`http://localhost:3500/brand`),
    ]).pipe(
      tap(([ad, users, categories, brands]) => {
        const category = categories.find(one => one._id === ad.category).name;
        const brand = brands.find(one => one._id === ad.brand).name;
        const user = users.find(one => one._id === ad.user);
        const data = {
          ...ad,
          category,
          brand,
          user
        }
        this._singleAdData.next(data);
      })
    )
  }
}
