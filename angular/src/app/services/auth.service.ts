import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


export const Authorization: string = 'jwt_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL = 'http://localhost:5000/api'
  

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }


 getToken(): string {
    return  this.cookieService.get("Authorization")
  }

  private saveToken(token: string, email: string): void {
    this.cookieService.set("Authorization", token)
    this.cookieService.set("DisplayedName", email)
  }


  private getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined)  return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);

    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }


  singUp(user) {
    return this.http.post<any>(this.URL + '/signup', user).pipe(tap((res: any) => {
      if (res) {
       this.saveToken(res.token, res.data.email);
      }
    })
    );
  }
  home() {
    let URLfULL = this.URL + '/home'
    return this.http.get<any>(URLfULL);
  }
}
