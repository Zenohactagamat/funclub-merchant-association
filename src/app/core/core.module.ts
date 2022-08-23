import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CouponDurationPipe } from './pipes/coupon-duration.pipe';

@NgModule({
  declarations: [CouponDurationPipe],
  imports: [CommonModule],
  exports: [CouponDurationPipe],
})
export class CoreModule {}
