import { CouponAvailability } from './coupon-availability';
import { EntityWithUuid } from './entity-with-uuid';

/**
 * Association
 */
export interface Association extends EntityWithUuid {
  /** @var name - Name */
  name: string;
  /** @var category - Category (sport de combat, sport collectif, social, ...) */
  category: string;
  /** @var activity -  Activity (danse, tir à l'arc, boxe,...) */
  activity: string;
  /** @var logo - Association logo */
  logo: string;
  /** @var description - Association description */
  description: string;
  /** @var availableCoupons - Array of available coupon information */
  availableCoupons: CouponAvailability[];
}
