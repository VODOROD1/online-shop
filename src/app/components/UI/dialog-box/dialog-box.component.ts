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
  
  constructor() { 

  }

  ngOnInit() {

  }
}
