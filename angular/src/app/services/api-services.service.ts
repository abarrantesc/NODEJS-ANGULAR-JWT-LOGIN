import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {


  private URL = 'http://localhost:5000/api'


  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }


  getTaks(){
    let URLfULL = this.URL + '/tasks/getTasks'
    return this.http.get<any>(URLfULL);

  }

}
