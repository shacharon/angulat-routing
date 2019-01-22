import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { CanLoad } from "@angular/router";
import { Route } from "@angular/router";
import { UrlSegment } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
   return this.checkLoggedIn(route.path);
  }

  constructor (private authService:AuthService, private router :Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn (url :string) :boolean
  {
    if (this.authService.isLoggedIn)
      {
        return true;
      }
    this.authService.redirectUrl = url;
      this.router.navigate(['/login'])
      return false;
  }
}
