import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TextToSpeechService {

    private lang: string;

  constructor() {
      this.lang = 'es-ES';
      //this.lang = 'ar-MA';
  }

  public utterThis(text) {
    if ("speechSynthesis" in window) {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = this.lang;
        window.speechSynthesis.speak(msg);
      }
  }

  public setLang(lang: string) {
      this.lang = lang;
  }

}
