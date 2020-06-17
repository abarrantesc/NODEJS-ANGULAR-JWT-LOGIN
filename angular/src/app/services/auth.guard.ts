import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private services:AuthService,private router: Router) { }


  canActivate() {
    if (!this.services.isTokenExpired()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }

  
}
