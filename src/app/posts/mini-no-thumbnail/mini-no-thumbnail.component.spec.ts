import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNoThumbnailComponent } from './mini-no-thumbnail.component';

describe('MiniNoThumbnailComponent', () => {
  let component: MiniNoThumbnailComponent;
  let fixture: ComponentFixture<MiniNoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniNoThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
