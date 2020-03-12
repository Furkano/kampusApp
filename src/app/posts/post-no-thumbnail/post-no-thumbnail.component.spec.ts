import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNoThumbnailComponent } from './post-no-thumbnail.component';

describe('PostNoThumbnailComponent', () => {
  let component: PostNoThumbnailComponent;
  let fixture: ComponentFixture<PostNoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostNoThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
