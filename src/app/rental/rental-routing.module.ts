

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalComponent } from './rental.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';

const routes: Routes = [
    { path: 'rentals', component: RentalComponent, children: [
      { path: '', component: RentalListingComponent},
      { path: ':rentalId', component: RentalDetailComponent},
    ] }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule { }
