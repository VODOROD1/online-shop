import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.scss"]
})

export class EditDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  dialogForm: FormGroup;


  onNoClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit() {
    debugger
    let chocenProduct = this.data.chocenProduct;
    debugger
    this.dialogForm = new FormGroup({
      title: new FormControl(chocenProduct.title),
      image: new FormControl(chocenProduct.image),
      price: new FormControl(chocenProduct.price),
      year: new FormControl(chocenProduct.year),
      batteryCapacity: new FormControl(chocenProduct.configure.batteryCapacity),
      maxSpeed: new FormControl(chocenProduct.configure.maxSpeed),
    });
    debugger
  }

  onSubmit() {
    debugger
    console.log(this.data);
    this.data = {
      id: this.data.chocenProduct.id,
      title: this.dialogForm.value.title,
      image: "assets/images/Electro-scooter.jpg",
      year: this.dialogForm.value.year,
      price: this.dialogForm.value.price,
      configure: {
        batteryCapacity: this.dialogForm.value.batteryCapacity,
        maxSpeed: this.dialogForm.value.maxSpeed
      }
    }
    debugger
    this.dialogRef.close(this.data);
  }
}
