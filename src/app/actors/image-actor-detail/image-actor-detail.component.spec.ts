import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageActorDetailComponent } from './image-actor-detail.component';

describe('ImageActorDetailComponent', () => {
  let component: ImageActorDetailComponent;
  let fixture: ComponentFixture<ImageActorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageActorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageActorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
