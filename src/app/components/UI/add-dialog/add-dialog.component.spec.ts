import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AddDialogComponent } from "./add-dialog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DialogBoxComponent", () => {

  let fixture: ComponentFixture<AddDialogComponent>;
  let component: AddDialogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AddDialogComponent]
    });

    fixture = TestBed.createComponent(AddDialogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
