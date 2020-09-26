import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Category {
  name: string;
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3500/category')
  }
  getBrends(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3500/brend')
  }
  getAds(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3500/ad')
  }

}
