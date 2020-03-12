import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-normal-post',
  templateUrl: './normal-post.component.html',
  styleUrls: ['./normal-post.component.scss']
})
export class NormalPostComponent implements OnInit {
@Input("post") post;

  constructor() { }

  ngOnInit() {
  }

}
