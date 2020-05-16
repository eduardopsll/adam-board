import { Injectable } from "@angular/core";
import { Language } from "@models";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private languages: Language[] = [
    {
      id: "es-ES",
      text: "Español",
    },
    {
      id: "ar-MA",
      text: "Árabe",
    },
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
    this.languageSelected = language || this.languageMap["ar-MA"];
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
