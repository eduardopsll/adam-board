import { Injectable } from "@angular/core";
import { Sentence, Pictogram } from '@models/index';
import { TextDirectionEnum } from '@enums/index';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Injectable({
    providedIn: "root"
})
export class SentenceService {

    private pictogramSentence: Sentence;
    private pictogramSentenceDefault: Sentence =  {
        dateTime: null,
        order: TextDirectionEnum.ltr,
        words: []
    }

    constructor(private textToSpeechService: TextToSpeechService){
        this.resetSentence();
    }

    public getPictogramSentence() {
        return this.pictogramSentence;
    }

    public getSentence() {
        return this.pictogramSentence.words.map(word => word.text).join(' ');
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
        this.pictogramSentence = {...this.pictogramSentenceDefault}
    }
}