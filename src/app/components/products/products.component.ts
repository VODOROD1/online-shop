import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/modals/products";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})

export class ProductsComponent implements OnInit {

  public products: IProduct[];
  private productsSubscription: Subscription;
  
  constructor(private productsService: ProductsService) { 
  }

  ngOnInit() {
    debugger
    this.productsSubscription = this.productsService.getProducts()
    .subscribe(result => {
      debugger
      this.products = result;
    })
  }

  ngOnDestroy() {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
