import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-bar',
  templateUrl: './details-bar.component.html',
  styleUrls: ['./details-bar.component.css']
})
export class DetailsBarComponent implements OnInit {

  pages = [
    {name:'home', page: ''},
    {name:'about', page: 'about'},
    {name:'contacts', page: 'contacts'}
  ];
  constructor(private route: ActivatedRoute, private router: Router) { }

 
  ngOnInit() {
  }

}
