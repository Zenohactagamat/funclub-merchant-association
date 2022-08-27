import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDateDisplayComponent } from './coupon-date-display.component';

describe('CouponDateDisplayComponent', () => {
  let component: CouponDateDisplayComponent;
  let fixture: ComponentFixture<CouponDateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponDateDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponDateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
