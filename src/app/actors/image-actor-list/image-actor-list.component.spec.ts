import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageActorListComponent } from './image-actor-list.component';

describe('ImageActorListComponent', () => {
  let component: ImageActorListComponent;
  let fixture: ComponentFixture<ImageActorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageActorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageActorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
