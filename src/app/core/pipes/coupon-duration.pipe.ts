import { Pipe, PipeTransform } from '@angular/core';
import { CouponAvailabilityTimeUnit } from '../interfaces/coupon-availability-time-unit';

/**
 * @class DurationPipe
 * Display value for given CouponAvailabilityTimeUnit
 */
@Pipe({
  name: 'couponDuration',
})
export class CouponDurationPipe implements PipeTransform {
  transform(value: CouponAvailabilityTimeUnit, quantity = 1): string {
    let duration: string;

    switch (value) {
      case CouponAvailabilityTimeUnit.HOUR:
        duration = 'heure';
        break;

      case CouponAvailabilityTimeUnit.WEEK:
        duration = 'semaine';
        break;

      default:
        duration = 'jour';
        break;
    }

    // Add plural
    if (quantity > 1) {
      duration += 's';
    }

    return duration;
  }
}
