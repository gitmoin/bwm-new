import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListingComponent } from './rental/rental-listing/rental-listing.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  { path: '', redirectTo: 'rentals', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
