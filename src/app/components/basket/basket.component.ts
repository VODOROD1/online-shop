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
    this.productsService.removeFromBasket(id)
    .subscribe(result => {
      this.basket = this.basket.filter(item => item.id !== id)
    })
  }

  minusQuantity(item: IProduct) {
    // @ts-ignore
    if(item.quantity === 1) {
      this.removeItemFromBasket(item.id);
    } else {
      // @ts-ignore
      item.quantity--;
      this.updateToBasket(item);
    }
  }

  plusQuantity(item: IProduct) {
    // @ts-ignore
    item.quantity++;
    this.updateToBasket(item);
  }

  updateToBasket(item: IProduct) {
    this.productsService.updateToBasket(item)
    .subscribe(data => {
      this.basket = this.basket.map(elem => {
        if(elem.id === item.id) {
          return item;
        } else {
          return elem;
        }
      })
    })
  }

  ngOnDestroy() {
    this.basketSubscription.unsubscribe();
  }
}
