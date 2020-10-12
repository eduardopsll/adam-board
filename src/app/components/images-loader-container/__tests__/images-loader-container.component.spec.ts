import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesLoaderContainerComponent } from '../images-loader-container.component';

describe('ImagesLoaderContainerComponent', () => {
  let component: ImagesLoaderContainerComponent;
  let fixture: ComponentFixture<ImagesLoaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesLoaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesLoaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
