import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pages = [
    {name:'view', page: 'view'},
    
  ];

  clientName : string;
  clientId  : string;
  city : string;
  flightClass  : string;
  departDate : string;
  returnDate : string;

  constructor(private route: ActivatedRoute, private router: Router) { }

 
  ngOnInit() {
    this.route.queryParams.subscribe( 
      params => {
        this.clientName = params['clientName'];
        this.clientId = params['clientId'];
        this.city = params['city'];
        this.flightClass = params['flightClass'];
        this.departDate = params['departDate'];
        this.returnDate = params['returnDate'];

      }
    );
    console.log(this.city);
  }

}
