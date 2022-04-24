import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiveStarComponent } from './five-star.component';

describe('FiveStarComponent', () => {
  let component: FiveStarComponent;
  let fixture: ComponentFixture<FiveStarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
