import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<IUserInfo>(`http://localhost:3500/users/${id}`);
  }
  getAdsFromUser(id: string) {
    return this.http.get(`http://localhost:3500/ad/${id}`);
  }
}
