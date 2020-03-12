import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-no-thumbnail',
  templateUrl: './post-no-thumbnail.component.html',
  styleUrls: ['./post-no-thumbnail.component.scss']
})
export class PostNoThumbnailComponent implements OnInit {
  @Input("post") post;
  constructor() { }

  ngOnInit() {
  }

}
