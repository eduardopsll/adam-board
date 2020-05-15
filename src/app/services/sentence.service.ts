import { Injectable } from "@angular/core";
import { Sentence, Pictogram } from '@models';
import { TextDirectionEnum } from '@enums';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import { PictogramAsset } from 'src/app/models/pictogram-asset.model';

@Injectable({
    providedIn: "root"
})
export class SentenceService {

    private pictogramSentence: Sentence;

    constructor(private textToSpeechService: TextToSpeechService){
        this.resetSentence();
    }

    public getPictogramSentence(): Sentence {
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
        this.pictogramSentence = {
            dateTime: null,
            order: TextDirectionEnum.ltr,
            words: []
        }
    }
}