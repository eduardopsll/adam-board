import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatTabsModule } from '@angular/material/tabs';
import { MockComponent, MockService } from 'ng-mocks';

import { BoardComponent } from '../board.component';
import { SentenceService } from 'src/app/services';
import { CarouselComponent } from 'src/app/components/carousel';
import { MenuComponent } from 'src/app/components/menu';
import { CardComponent } from 'src/app/components/card';
import { MatIconModule } from '@angular/material/icon';

jest.mock('src/app/services/sentence.service');

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, MatIconModule, MatTabsModule],
      declarations: [ BoardComponent, MockComponent(CarouselComponent), MockComponent(MenuComponent), MockComponent(CardComponent) ],
      providers: [SentenceService, ServiceWorkerModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
