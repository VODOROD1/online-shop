import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/modals/products";
import { ProductsService } from "src/app/services/products.service";
import { DialogBoxComponent } from "../UI/dialog-box/dialog-box.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})

export class ProductsComponent implements OnInit, OnDestroy {

  public products: IProduct[];
  private productsSubscription: Subscription;
  canEdit: boolean = false;
  
  constructor(private productsService: ProductsService, public dialog: MatDialog) { 
  }

  ngOnInit() {
    debugger
    this.canEdit = true;
    this.productsSubscription = this.productsService.getProducts()
    .subscribe(result => {
      debugger
      this.products = result;
    })
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.data = this.products
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig
    // {
    //   width: '800px',
    //   data: 123
    // }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
