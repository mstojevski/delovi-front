import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleAdService {

  constructor(private http: HttpClient) { }

  getAd(id: string) {
    return this.http.get(`http://localhost:3500/ad/single/${id}`).subscribe(data => console.log(data))
  }
}
