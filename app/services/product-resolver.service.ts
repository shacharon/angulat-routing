import { Injectable } from '@angular/core';
import { Product, ProductResolved } from "../products/product";
import { Resolve } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { ProductService } from "../products/product.service";
import { map } from "rxjs/internal/operators/map";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<ProductResolved> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductResolved | Observable<ProductResolved> | Promise<ProductResolved> {
    const id = route.paramMap.get('id');
    if(isNaN(+id))
      {
        const message = `pro: ${id}`;
        console.error(message);
         return of ({product: null , error :message});
      }
   return this.productService.getProduct(+id).pipe(
     map(product => (
       {
         product :product
       }
     )),
      catchError(
        error => {
          const message = `error: ${error}`;
            return of ({product: null , error :message});
        }
      )
   )
    //return this.productService.getProduct(+id);
  }

  constructor(private productService : ProductService) { 

  }
}
