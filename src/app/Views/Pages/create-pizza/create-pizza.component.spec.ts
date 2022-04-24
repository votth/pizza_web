import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatePizzaComponent } from './create-pizza.component';

describe('CreatePizzaComponent', () => {
  let component: CreatePizzaComponent;
  let fixture: ComponentFixture<CreatePizzaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
