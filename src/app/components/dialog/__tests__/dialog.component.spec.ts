import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { of } from 'rxjs';
import { ImagesService } from 'src/app/services';

import { DialogComponent } from '../dialog.component';

class mockMatDialogRef {
  close() {
    console.log('close mock dialog');
  }
}

class mockImagesService {
  download() {
    return of(10);
  }
}

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatProgressBarModule, MatDialogModule],
      declarations: [ DialogComponent ],
      providers: [{provide: MatDialogRef, useClass: mockMatDialogRef}, {provide: ImagesService, useClass: mockImagesService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
