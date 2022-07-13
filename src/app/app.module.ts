import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AssociationsComponent } from './pages/associations/associations.component';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, AssociationsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
