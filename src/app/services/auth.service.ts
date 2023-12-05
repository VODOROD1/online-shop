import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {

  }

  isSure: boolean = false;

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string> {
    if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'admin123') {
      this.setToken('adminewrewqrtqerterqtgreqrkk');
      return of('admin');
    } else if(userInfo.email === 'user1@gmail.com' && userInfo.password === 'user1') {
      this.setToken('user1ewrewqrtqerterqtgreqrkk');
      return of('user1');
    } else {
      return throwError(() => new Error('Failed Login'));
    }
  }

  logout() {
    if(confirm('Вы уверены?')) {
      this.isSure = true;
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}
