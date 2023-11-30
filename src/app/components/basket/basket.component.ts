import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/modals/products";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-basket",
  templateUrl: "./basket.component.html",
  styleUrls: ["./basket.component.scss"]
})

export class BasketComponent implements OnInit, OnDestroy {
  
  basket: IProduct[];
  basketSubscription: Subscription;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { 

  }

  ngOnInit() {
    this.basketSubscription = this.productsService.getBasket()
      .subscribe(data => {
        this.basket = data;
      })
  }

  removeItemFromBasket(id: string | undefined) {

  }

  ngOnDestroy() {
    this.basketSubscription.unsubscribe();
  }
}
