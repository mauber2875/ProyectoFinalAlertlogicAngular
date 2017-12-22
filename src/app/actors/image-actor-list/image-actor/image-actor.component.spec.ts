import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageActorComponent } from './image-actor.component';

describe('ImageActorComponent', () => {
  let component: ImageActorComponent;
  let fixture: ComponentFixture<ImageActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
