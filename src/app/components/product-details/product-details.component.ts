import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/modals/products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})

export class ProductDetailsComponent implements OnInit, OnDestroy {
  
  product: IProduct;
  productSubscription: Subscription;

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.productSubscription = this.route.data.subscribe(data => {
      this.product = data['data'];
    })
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
