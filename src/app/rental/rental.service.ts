import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Rental } from './shared/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentals: Rental[] = [

    {
      _id: '1',
      title: 'Central Apartment 1',
      city: 'NewYork',
      street: 'Times Square',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 3,
      description: 'Very nice apartment',
      dailyPrice: 34,
      shared: false,
      createdAt: '1/1/2020'

    },
    {
      _id: "2",
      title: "Central Apartment 2",
      city: "San Francisco",
      street: "Main street",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 2,
      description: "Very nice apartment",
      dailyPrice: 12,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      _id: "3",
      title: "Central Apartment 3",
      city: "Bratislava",
      street: "Hlavna",
      category: "condo",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 2,
      description: "Very nice apartment",
      dailyPrice: 334,
      shared: true,
      createdAt: "24/12/2017"
    },
    {
      _id: "4",
      title: "Central Apartment 4",
      city: "Berlin",
      street: "Haupt strasse",
      category: "house",
      image: "http://via.placeholder.com/350x250",
      numOfRooms: 9,
      description: "Very nice apartment",
      dailyPrice: 33,
      shared: true,
      createdAt: "24/12/2017"
    }

  ]

  constructor() { }

  getRental(_id: string): Observable<Rental> {

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(
          this.rentals.find(rental => {
            return rental._id == _id;
          })
        )
      }, 200)
    })

  }

  getRentals(): Rental[] {
    return this.rentals.slice();
  }
  getRentalsObs(): Promise<Rental[]> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.rentals.slice());
      }, 500)
    })
    // return of(this.rentalArray.slice());
  }
}
