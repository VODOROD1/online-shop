import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-dialog-box",
  templateUrl: "./dialog-box.component.html",
  styleUrls: ["./dialog-box.component.scss"]
})

export class DialogBoxComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    title: new FormControl('')
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

  test() {
    console.log(this.data);
  }
}
