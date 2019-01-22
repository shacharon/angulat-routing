import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivate } from "@angular/router";
import { ProductEditComponent } from "./product-edit.component";

@Injectable({
  providedIn: 'root'
})
export class ProduchEditGuard implements CanDeactivate<ProductEditComponent> {
  canDeactivate(component: ProductEditComponent, 
     currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): 
     boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }
 
}
 