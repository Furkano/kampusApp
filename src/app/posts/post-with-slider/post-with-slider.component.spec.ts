import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithSliderComponent } from './post-with-slider.component';

describe('PostWithSliderComponent', () => {
  let component: PostWithSliderComponent;
  let fixture: ComponentFixture<PostWithSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWithSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWithSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
