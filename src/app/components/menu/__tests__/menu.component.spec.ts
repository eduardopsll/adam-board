import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from '../menu.component';
import { LanguageService } from 'src/app/services';

const languageService = {
  getLanguages: jest.fn(),
  getLanguageSelected: jest.fn(),
  setLanguage: jest.fn()
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [
        {
          provide: LanguageService,
          useValue: languageService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
