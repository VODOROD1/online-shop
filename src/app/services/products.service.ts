import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "../modals/products";
import { Observable, map } from "rxjs";

/**
 * @description
 * @class
 */
@Injectable({
  providedIn: "root"
})
export class ProductsService {

  constructor(private http: HttpClient) {
    
  }

  getProducts(): Observable<IProduct[]> {
    debugger
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }

  getProduct(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`)
    .pipe(map(elem => {
      // just for testing
      return elem;
    }))
  }
}
