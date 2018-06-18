import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  navigateToBooking(){
    this.router.navigate(['booking']);
    console.log('heyyyy');
  }
}
