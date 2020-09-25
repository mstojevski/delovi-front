import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router,private toastr: ToastrService) {}

  TOKEN_KEY = 'token';

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']);
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  register(email: string, password: string) {
    return this.http
      .post(
        'http://localhost:3500/auth/register',
        { email, password },
        { responseType: 'text' }
      )
      .subscribe(() => {
        this.toastr.success('Uspesno ste se registrovali');
        this.router.navigate(['/login']);
      }, (err) => {
        console.log('err', err)
        this.toastr.error(err.message);
      });
  }
  login(email: string, password: string) {
    return this.http
      .post('http://localhost:3500/auth/login', { email, password })
      .subscribe((res: any) => {
        this.saveToken(res.token);
        this.router.navigate(['/home']);
      }, (err) => {
        this.toastr.error(err.error.message);
      });
  }
}