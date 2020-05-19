import { Component, OnInit } from '@angular/core';
import { Menu, Language } from '@models';
import { LanguageService } from '@services';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public options: Menu[];
  public optionSelected: Menu;
  public optionsAreSelectable: boolean = false;

  constructor(private languageService: LanguageService) { 
    this.options = this.languageService.getLanguages();
    this.optionSelected = this.languageService.getLanguageSelected();
  }

  ngOnInit() {
  }

  public selectOption($event): void {
    if (this.optionsAreSelectable) {
      this.updateLanguage($event);
    }
    this.optionsAreSelectable = !this.optionsAreSelectable;
  }

  private updateLanguage(language: Language): void {
    this.languageService.setLanguage(language);
    this.optionSelected = this.languageService.getLanguageSelected();
  }

}
