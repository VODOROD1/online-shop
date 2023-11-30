import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DeleteDialogComponent } from "./delete-dialog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DialogBoxComponent", () => {

  let fixture: ComponentFixture<DeleteDialogComponent>;
  let component: DeleteDialogComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DeleteDialogComponent]
    });

    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
