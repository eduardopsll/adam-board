import { Injectable } from "@angular/core";
import { Language } from "@models";
import { LanguageEnum } from 'src/app/enums/language.enum';

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private languages: Language[] = [
    {
      id: LanguageEnum["ar-SA"],
      text: "Árabe",
    },
    {
      id: LanguageEnum["es-ES"],
      text: "Español",
    }
  ];
  private languageMap: { [key: string]: Language } = this.languages.reduce(
    (acc, language) => {
      acc[language.id] = language;
      return acc;
    },
    {}
  );
  private languageSelected: Language;
  private localStorage = window.localStorage;

  constructor() {
    const language = JSON.parse(this.localStorage.getItem("language"));
    this.languageSelected = language || this.languageMap[LanguageEnum["es-ES"]];
  }

  public getLanguages(): Language[] {
    return this.languages;
  }

  public getLanguageSelected(): Language {
    return this.languageSelected;
  }

  public setLanguage(language: Language): void {
    this.localStorage.setItem('language', JSON.stringify(language));  
    this.languageSelected = language;
  }
}
