import { CouponAvailabilityTimeUnit } from './coupon-availability-time-unit';

/**
 * Coupon duration
 */
export interface CouponDuration {
  /** @var quantity - unit quantity  */
  quantity: number;
  /** @var unit - time unit */
  unit: CouponAvailabilityTimeUnit;
}
