import { Component, Input } from '@angular/core';
import { CouponAvailability } from '@app/core/interfaces';

@Component({
  selector: 'app-coupon-date-display',
  templateUrl: './coupon-date-display.component.html',
  styleUrls: ['./coupon-date-display.component.scss'],
})
export class CouponDateDisplayComponent {
  @Input() coupon: CouponAvailability;

  constructor() {}
}
