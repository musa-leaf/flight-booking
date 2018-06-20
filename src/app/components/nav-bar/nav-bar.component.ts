import { Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  /*global variables for pages */
  @Input() name;
  @Input() page;

  /*global variables */
  @Input() clientName;
  @Input() clientId;
  @Input() city;
  @Input() flightClass;
  @Input() departDate;
  @Input() returnDate;

  constructor(private router: Router) { }

  pages = [
    {name:'view', page: 'view'}
  ];
  ngOnInit() {
  }

  navigateTo(){
    switch(this.name){
      case 'view':
        this.router.navigate(['/home/view']);
      break;
      case 'home':
      this.router.navigate(['/']);
      break;
    }
  }

}
