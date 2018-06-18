import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-bar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.css']
})
export class DetailsBarComponent implements OnInit {

  pages = [
    {name: 'events', page: 'events'},
    {name: 'views', page: 'views'},
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

 
  ngOnInit() {
  }

}
