import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AssociationDetailsDialogComponent } from './pages/associations/association-details-dialog.component';
import { AssociationsComponent } from './pages/associations/associations.component';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, AssociationsComponent, AssociationDetailsDialogComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, MatCardModule, MatButtonModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
