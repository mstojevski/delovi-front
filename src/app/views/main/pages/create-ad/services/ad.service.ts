import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export interface ICreateAd {
  title: string;
  description: string;
  category: string;
  brand: string;
  favorite: boolean;
  price:number;
  year: number;
  model:string;
  status:string;
}

@Injectable({
  providedIn: 'root'
})


export class AdService {
 ad: any = {};

  constructor(private http: HttpClient) { }

  createAd(ad: ICreateAd) {
    this.http.post(`${environment.apiUrl}/ad`, ad).subscribe()
  }
}
