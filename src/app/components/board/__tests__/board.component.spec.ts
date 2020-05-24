import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { BoardComponent } from '../board.component';
import { SentenceService } from 'src/app/services';
import { CarouselComponent } from 'src/app/components/carousel';
import { MenuComponent } from 'src/app/components/menu';

jest.mock('src/app/services/sentence.service');

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, MockComponent(CarouselComponent), MockComponent(MenuComponent) ],
      providers: [SentenceService]
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
