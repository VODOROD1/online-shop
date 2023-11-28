import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BaseComponent } from "./base.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BaseComponent", () => {

  let fixture: ComponentFixture<BaseComponent>;
  let component: BaseComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BaseComponent]
    });

    fixture = TestBed.createComponent(BaseComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
