import { RentalCardComponent } from './../shared/rental-card/rental-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalRoutingModule } from './rental-routing.module';




@NgModule({
  declarations: [
    RentalComponent,
    RentalListingComponent,
    RentalDetailComponent,
    RentalCardComponent
  ],
  imports: [
    CommonModule,
    RentalRoutingModule

  ], 
  exports: [
    // RentalCardComponent

  ]
})
export class RentalModule { }
