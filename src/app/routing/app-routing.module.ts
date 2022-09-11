import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociationsComponent } from '../pages/associations/associations.component';

const routes: Routes = [
  { path: '', component: AssociationsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
