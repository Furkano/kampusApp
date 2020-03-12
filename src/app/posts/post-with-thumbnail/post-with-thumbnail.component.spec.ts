import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithThumbnailComponent } from './post-with-thumbnail.component';

describe('PostWithThumbnailComponent', () => {
  let component: PostWithThumbnailComponent;
  let fixture: ComponentFixture<PostWithThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWithThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWithThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
