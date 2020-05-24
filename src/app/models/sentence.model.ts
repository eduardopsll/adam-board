import { Pictogram } from 'src/app/models/pictogram.model';
import { TextDirectionEnum } from 'src/app/enums/text-direction.enum';

export interface Sentence {
    dateTime: string,
    words: Pictogram[],
    order: TextDirectionEnum
}