import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BasketComponent } from "./basket.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BasketComponent", () => {

  let fixture: ComponentFixture<BasketComponent>;
  let component: BasketComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BasketComponent]
    });

    fixture = TestBed.createComponent(BasketComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
