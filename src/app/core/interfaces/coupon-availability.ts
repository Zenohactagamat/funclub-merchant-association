import { CouponDuration } from './coupon-duration';

/**
 * Coupon availability
 */
export interface couponAvailability {
  /** @var startDate - start date */
  startDate: Date;
  /** @var endDate - end date */
  endDate: Date;
  /** @var duration - duration */
  duration: CouponDuration | null;
}
