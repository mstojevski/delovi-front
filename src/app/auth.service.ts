import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {environment} from '../environments/environment'


export interface IUser {
  email:string;
  password:string;
  name: string;
  city: string;
  phone:string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router,private toastr: ToastrService) {
  }

  TOKEN_KEY = 'token';

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  public get isAdmin() {
    return JSON.parse(atob(this.token.split('.')[1])).role === 'admin';
  }
  public get currentUserId() {
    return JSON.parse(atob(this.token.split('.')[1])).userId;
  }
  public get currentUserEmail() {
    return JSON.parse(atob(this.token.split('.')[1])).email;
  }
  public get currentUserName() {
    return JSON.parse(atob(this.token.split('.')[1])).name;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  register(user: IUser) {
    return this.http
      .post(
        `${environment.apiUrl}/auth/register`,
        { user },
        {responseType: 'text'}
      )
      .subscribe(() => {
        this.toastr.success('Uspesno ste se registrovali');
        this.login(user.email, user.password);
      }, (err) => {
        this.toastr.error(err.message);
      });
  }
  login(email: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { email, password })
      .subscribe((res: any) => {
        this.saveToken(res.token);
        this.router.navigate(['/']);
      }, (err) => {
        this.toastr.error(err.error.message);
      });
  }
}
