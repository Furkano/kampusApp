import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/cores/models/filter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter:Filter={link:"getPopular",filters:{page:1,offset:15,id:15}};
  constructor() { }

  ngOnInit() {
    
  }

}
