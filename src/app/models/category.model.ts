import { Pictogram } from 'src/app/models/pictogram.model';

export interface Category {
    id: string;
    color: string;
    text: string;
    items: Pictogram[]
}