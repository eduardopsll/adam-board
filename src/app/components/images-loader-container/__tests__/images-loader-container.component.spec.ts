import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ImagesService } from 'src/app/services';

import { ImagesLoaderContainerComponent } from '../images-loader-container.component';

class mockImagesService {
  set() {
    return of([]);
  }
}

describe('ImagesLoaderContainerComponent', () => {
  let component: ImagesLoaderContainerComponent;
  let fixture: ComponentFixture<ImagesLoaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesLoaderContainerComponent ],
      providers: [{
        provide: ImagesService, 
        useClass: mockImagesService
      }]
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
