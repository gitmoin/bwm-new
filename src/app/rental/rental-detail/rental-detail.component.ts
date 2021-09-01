import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RentalService } from '../rental.service';
import { Rental } from '../shared/rental.model';
import { exhaustMap, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  rentalId = null;

  constructor(private rentalService: RentalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramMap: ParamMap) => {

          if (paramMap.has('rentalId')) {
            this.rentalId = paramMap.get('rentalId');
            return this.rentalService.getRental(this.rentalId)

          }


        }

        )

      )


      .subscribe((rental) => {
        console.log(rental);
        
        this.rental = rental;

      });
    // .subscribe((paramMap: ParamMap) => {

    //   if(paramMap.has('rentalId')) {
    //     this.rentalId = paramMap.get('rentalId');
    //     this.rentalService.getRental(this.rentalId ).subscribe((rental) => {
    //       console.log(rental);

    //       this.rental = rental;
    //     });
    //   } else {
    //     this.rentalId = null;
    //   }
    //   console.log(this.rentalId);
    // })



    // this.route.paramMap.subscribe((paramMap: ParamMap) => {

    //   if(paramMap.has('rentalId')) {
    //     this.rentalId = paramMap.get('rentalId');
    //     this.rentalService.getRental(this.rentalId ).subscribe((rental) => {
    //       console.log(rental);

    //       this.rental = rental;
    //     });
    //   } else {
    //     this.rentalId = null;
    //   }
    //   console.log(this.rentalId);
    // })
  }

  ngOnDestroy() {
    console.log('destroyed');

  }

}
function concatMap(concatMap: any) {
  throw new Error('Function not implemented.');
}

function mergetMap(arg0: (params: any) => any): import("rxjs").OperatorFunction<import("@angular/router").Params, unknown> {
  throw new Error('Function not implemented.');
}

