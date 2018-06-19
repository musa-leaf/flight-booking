import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  clientName : string = "";
  clientId : string = "";
  city : string = "";
  flightClass : string = "";
  depart : string = "";
  return : string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }
  processData(){
    this.router.navigate(['details'], {
      queryParams : {
        clientName: this.clientName,
        clientId : this.clientId,
        city: this.city,
        flightClassclass: this.flightClass,
        depart:this.depart,
        return:this.return
      }
    });
  }
}
