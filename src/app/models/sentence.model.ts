import { Pictogram } from '@models';
import { TextDirectionEnum } from '@enums';

export interface Sentence {
    dateTime: string,
    words: Pictogram[],
    order: TextDirectionEnum
}