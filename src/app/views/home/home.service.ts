import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    return this.http.get<IData[]>('http://localhost:3500/category')
  }
  getBrends(): Observable<IData[]> {
    return this.http.get<IData[]>('http://localhost:3500/brand')
  }
  getAds(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3500/ad').pipe(tap(
      data => console.log('data',data)
    ))
  }

}
