import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  ParamMap,  Router } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rentalId = null;

  constructor(private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {

      if(paramMap.has('rentalId')) {
        this.rentalId = paramMap.get('rentalId');
      } else {
        this.rentalId = null;
      }

      console.log(this.rentalId);
      // console.log(paramMap['params']['rentalId']);
      
    })
  }

}
