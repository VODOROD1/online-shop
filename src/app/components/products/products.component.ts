import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/modals/products";
import { ProductsService } from "src/app/services/products.service";
import { AddDialogComponent } from "../UI/add-dialog/add-dialog.component";
import { EditDialogComponent } from "../UI/edit-dialog/edit-dialog.component";
import { DeleteDialogComponent } from "../UI/delete-dialog/delete-dialog.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})

export class ProductsComponent implements OnInit, OnDestroy {

  public products: IProduct[];
  private productsSubscription: Subscription;
  canEdit: boolean = false;
  chocenProductId: string | undefined;
  
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

  openAddDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(AddDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.postProduct(result);
      console.log('The add-dialog was closed');
    });
  }

  openEditDialog(chocenProductId: string | undefined) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '800px';
    dialogConfig.disableClose = true;
    let chocenProduct = this.products.filter(product => {
      return product.id === chocenProductId;
    })[0];
    dialogConfig.data = {
      chocenProduct
    }
    debugger
    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      debugger
      this.editProduct(result);
      // this.postProduct(result);
      console.log('The edit-dialog was closed');
    });
  }

  openDeleteDialog(id: string | undefined) {
    this.chocenProductId = id;
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    dialogConfig.height = '150px';
    dialogConfig.disableClose = true;
    dialogConfig.id = id;
    debugger
    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      debugger
      if(result) {
        this.deleteProduct();
      }
      console.log('The edit-dialog was closed');
    });
  }

  postProduct(result: IProduct) {
    this.productsService.postProduct(result)
    .subscribe(result => {
      return this.products.push(result);
    })
  }

  editProduct(result: any) {

  }

  deleteProduct() {
    this.productsService.deleteProduct(this.chocenProductId)
    .subscribe(result => {
      debugger
      this.products = this.products.filter(product => {
        return product.id !== this.chocenProductId;
      })
    })
  }

  ngOnDestroy() {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
