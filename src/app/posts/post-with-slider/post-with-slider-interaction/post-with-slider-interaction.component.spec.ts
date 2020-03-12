import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithSliderInteractionComponent } from './post-with-slider-interaction.component';

describe('PostWithSliderInteractionComponent', () => {
  let component: PostWithSliderInteractionComponent;
  let fixture: ComponentFixture<PostWithSliderInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWithSliderInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWithSliderInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
