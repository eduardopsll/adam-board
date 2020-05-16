import { Component, OnInit } from '@angular/core';
import { Menu, Language } from '@models';
import { LanguageService } from '@services';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('opened', style({
        height: '*',
      })),
      state('closed', style({
        height: '0',
      })),
      transition('opened => closed', [
        animate('1s')
      ]),
      transition('closed => opened', [
        animate('1s')
      ]),
    ])
  ]
})
export class MenuComponent implements OnInit {

  public options: Menu[];
  public optionSelected: Menu;
  public shouldDisplayAllOptions: boolean = false;
  public openCloseAnimationOpenedFinised: boolean = true;
  public openCloseAnimationClosedFinised: boolean = true;

  constructor(private languageService: LanguageService) { 
    this.options = this.languageService.getLanguages();
    this.optionSelected = this.languageService.getLanguageSelected();
  }

  ngOnInit() {
  }

  public selectOption($event): void {
    this.openCloseAnimationClosedFinised = false;
    this.shouldDisplayAllOptions = false;
    this.updateLanguage($event);
  }

  public openMenu(): void {
    this.openCloseAnimationOpenedFinised = false;
    this.shouldDisplayAllOptions = true;
  }

  public openCloseDone(type: string) {
    if (type === 'opened') {
      this.openCloseAnimationOpenedFinised = true;
    } else {
      this.openCloseAnimationClosedFinised = true;
    }
  }

  private updateLanguage(language: Language): void {
    this.languageService.setLanguage(language);
    this.optionSelected = this.languageService.getLanguageSelected();
  }

}
