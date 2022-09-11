import { CouponDuration } from './coupon-duration';
import { EntityWithUuid } from './entity-with-uuid';

/**
 * Coupon availability
 */
export interface CouponAvailability extends EntityWithUuid {
  /** @var startDate - start date */
  startDate: Date;
  /** @var endDate - end date */
  endDate: Date;
  /** @var duration - duration */
  duration: CouponDuration | null;
}
