import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { IProduct } from '../modals/products';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: "root"
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productsService: ProductsService, private router: Router) {
    
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productsService.getProduct(route.params?.['id'])
      .pipe(catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      }));
  }
}