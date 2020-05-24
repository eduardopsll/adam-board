import { Injectable } from "@angular/core";

import { LanguageService } from 'src/app/services/language.service';

@Injectable({
  providedIn: "root",
})
export class TextToSpeechService {

  constructor(private languageService: LanguageService) {
  }

  public utterThis(text) {
    if ("speechSynthesis" in window) {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = this.languageService.getLanguageSelected().id;
        window.speechSynthesis.speak(msg);
      }
  }

}
