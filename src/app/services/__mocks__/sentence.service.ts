import { Injectable } from '@angular/core'

@Injectable()
export class SentenceService {
    public getSentence = jest.fn();
    public getSentenceString = jest.fn();
    public addPictogram = jest.fn();
    public removePictogram = jest.fn();
    public readSentence = jest.fn();
    public resetSentence = jest.fn();
}