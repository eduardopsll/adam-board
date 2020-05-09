import { Pictogram } from '@models/pictogram.model';
import { TextDirectionEnum } from '@enums/index';

export interface Sentence {
    dateTime: string,
    words: Pictogram[],
    order: TextDirectionEnum
}