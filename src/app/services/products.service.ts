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

  postProduct(newProduct: IProduct) {
    return this.http.post<IProduct>('http://localhost:3000/products', newProduct);
  }

  editProduct(changedProduct: IProduct) {
    return this.http.put<any>(`http://localhost:3000/products/${changedProduct.id}`, changedProduct);
  }

  deleteProduct(id: any) {
    debugger
    return this.http.delete<any>(`http://localhost:3000/products/${id}`);
  }
}
