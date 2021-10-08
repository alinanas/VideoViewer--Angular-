import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTmplComponent } from './video-tmpl.component';

describe('VideoTmplComponent', () => {
  let component: VideoTmplComponent;
  let fixture: ComponentFixture<VideoTmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTmplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
