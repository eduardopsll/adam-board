import { Injectable } from "@angular/core";

import { Sentence, Pictogram } from 'src/app/models';
import { TextDirectionEnum } from 'src/app/enums';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({
    providedIn: "root"
})
export class SentenceService {

    private pictogramSentence: Sentence;

    constructor(private textToSpeechService: TextToSpeechService, private languageService: LanguageService){
        this.resetSentence();
    }

    public getPictogramSentence(): Sentence {
        return this.pictogramSentence;
    }

    public getSentence() {
        return this.pictogramSentence.words.map(word => word.audios[this.languageService.getLanguageSelected().id]).join(' ');
    }

    public addPictogram(pictogram: Pictogram) {
        this.pictogramSentence.words.push(pictogram);
    }

    public removePictogram() {
        this.pictogramSentence.words.pop();
    }

    public readSentence() {
        this.textToSpeechService.utterThis(this.getSentence());
    }

    public resetSentence() {
        this.pictogramSentence = {
            dateTime: null,
            order: TextDirectionEnum.ltr,
            words: []
        }
    }
}