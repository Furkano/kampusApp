import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-with-slider',
  templateUrl: './post-with-slider.component.html',
  styleUrls: ['./post-with-slider.component.scss']
})
export class PostWithSliderComponent implements OnInit {
@Input("showInfo") showInfo:boolean;
@Input("showComments") showComments:boolean;
@Input("post") post;

images = [944, 1011, 984,455,784,456,487,789,412].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit() {
  }

}
