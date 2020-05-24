import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { BoardContainerComponent } from '../board-container.component';
import { BoardComponent } from 'src/app/components/board/board.component';
import { ArasaacService } from 'src/app/services/arasaac.service';

jest.mock('src/app/services/arasaac.service');

describe('AppBoardContainerComponent', () => {
  let component: BoardContainerComponent;
  let fixture: ComponentFixture<BoardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardContainerComponent, MockComponent(BoardComponent) ],
      providers: [ArasaacService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
