import { Injectable } from "@angular/core";

import { Sentence, Pictogram } from 'src/app/models';
import { TextDirectionEnum } from 'src/app/enums';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({
    providedIn: "root"
})
export class SentenceService {

    private sentence: Sentence;

    constructor(private textToSpeechService: TextToSpeechService, private languageService: LanguageService){
        this.resetSentence();
    }

    public getSentence(): Sentence {
        return this.sentence;
    }

    public getSentenceString() {
        return this.sentence.pictograms.map(word => word.audios[this.languageService.getLanguageSelected().id]).join(' ');
    }

    public addPictogram(pictogram: Pictogram) {
        this.sentence.pictograms.push(pictogram);
    }

    public removePictogram() {
        this.sentence.pictograms.pop();
    }

    public readSentence() {
        this.textToSpeechService.utterThis(this.getSentenceString());
    }

    public resetSentence() {
        this.sentence = {
            dateTime: null,
            order: TextDirectionEnum.ltr,
            pictograms: []
        }
    }
}