import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DialogBoxComponent } from "./dialog-box.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DialogBoxComponent", () => {

  let fixture: ComponentFixture<DialogBoxComponent>;
  let component: DialogBoxComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DialogBoxComponent]
    });

    fixture = TestBed.createComponent(DialogBoxComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
