import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ICreateAd {
  title: string;
  description: string;
  category: string;
  brand: string;
  favorite: boolean
}

@Injectable({
  providedIn: 'root'
})


export class AdService {

  constructor(private http: HttpClient) { }

  createAd(ad: ICreateAd) {
    this.http.post('http://localhost:3500/ad/', ad).subscribe()
  }
}
