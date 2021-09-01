import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RentalService } from '../rental.service';
import { IRental } from '../shared/rental.interface';
import { Rental } from '../shared/rental.model';
import { rentalArray } from '../shared/rentals.data';


@Component({
  selector: 'app-rental-listing',
  templateUrl: './rental-listing.component.html',
  styleUrls: ['./rental-listing.component.scss']
})
export class RentalListingComponent implements OnInit, IRental {
  isLoaded;

  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.rentals = this.rentalService.getRentals();
  // let rentalsPormise =   this.rentalService.getRentalsObs();

  // from(rentalsPormise).subscribe((rentals)=>{
  //   this.rentals = rentals;
  // })

    
  }

  rLog() {
    console.log('logged');
    
  }

}
