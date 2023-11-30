import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "add-dialog",
  templateUrl: "./add-dialog.component.html",
  styleUrls: ["./add-dialog.component.scss"]
})

export class AddDialogComponent implements OnInit {

  dialogForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
    batteryCapacity: new FormControl(''),
    maxSpeed: new FormControl(''),
  });
  
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

  onSubmit() {
    debugger
    console.log(this.data);
    this.data = {
      title: this.dialogForm.value.title,
      image: "assets/images/Electro-scooter.jpg",
      year: this.dialogForm.value.year,
      price: this.dialogForm.value.price,
      configure: {
        batteryCapacity: this.dialogForm.value.batteryCapacity,
        maxSpeed: this.dialogForm.value.maxSpeed
      }
    }
    this.dialogRef.close(this.data);
  }
}
