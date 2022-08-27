import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AssociationDetailsDialogComponent } from './pages/associations/association-details-dialog/association-details-dialog.component';
import { AssociationSelectionFormDialogComponent } from './pages/associations/association-selection-form-dialog/association-selection-form-dialog.component';
import { AssociationsComponent } from './pages/associations/associations.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { CouponDateDisplayComponent } from './pages/associations/coupon-date-display/coupon-date-display.component';

@NgModule({
  declarations: [AppComponent, AssociationsComponent, AssociationDetailsDialogComponent, AssociationSelectionFormDialogComponent, CouponDateDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatDialogModule, MatIconModule, MatTooltipModule, MatInputModule, MatRadioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
