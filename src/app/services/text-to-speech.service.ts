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
        const voice = this.getVoice(msg.lang)
        if (voice) {
          msg.voice = this.getVoice(msg.lang);
        }
        window.speechSynthesis.speak(msg);
      }
  }

  private getVoice(lang: string) {
    const voices = window.speechSynthesis.getVoices();
    return voices.find(voice => voice.lang === lang);
  }

}
