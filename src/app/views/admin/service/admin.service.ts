import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, BehaviorSubject } from 'rxjs';
import { IData } from '../../home/service/home.service';
import { IAd } from 'src/app/models/ad.interface';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _ads = new BehaviorSubject<IAd[]>([]);
  ads$ = this._ads.asObservable();
  constructor(private http: HttpClient) { }

  getAd() {
    return forkJoin([
      this.http.get<IData[]>(`${environment.apiUrl}/category`),
      this.http.get<IAd[]>(`${environment.apiUrl}/ad/all`),
    ]).pipe(
      tap(([categories, ads]) => {
        const adsWithCategory = ads.map((ad) => {
          const category = categories.find(one => one._id === ad.category).name;
          return {
            ...ad,
            category
          }
        })
        this._ads.next(adsWithCategory);
      })
    )
  }
  deleteAd(id: string) {
    return this.http.delete(`${environment.apiUrl}/ad/${id}`,  {responseType: 'text'}).pipe(
      tap(() => {
        const filteredData = this._ads.value.filter((one) => one._id !== id);
        this._ads.next(filteredData);
      })
    );
  }

  updateStatus(id: string) {
    return this.http.put(`${environment.apiUrl}/ad/${id}`, {sold: true}).pipe(
      tap((ad:IAd) => {
        const adUpdated = this._ads.value.find(one => one._id === ad._id);
        adUpdated.sold = true;
      })
    )
  }
}
