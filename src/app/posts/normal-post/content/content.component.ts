import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-post-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  images = [944, 1011, 984,455,784,456,487,789,412].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit() {
  }

}
