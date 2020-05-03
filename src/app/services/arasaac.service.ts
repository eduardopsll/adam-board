import parser from 'xml2json-light';
import { Injectable } from '@angular/core';
import { Pictogram, Category} from 'src/app/models';
import { CategoryEnum } from 'src/app/enums';

@Injectable({
    providedIn: 'root'
})
export class ArasaacService {

    private categories = [CategoryEnum.Days, CategoryEnum.Months, CategoryEnum.Emotions];

    constructor() {}

    public getPictograms = (categoryName) => {
        return fetch(`../assets/arasaac/${categoryName}/tablero_comunicacion.xml`).then((resp) => {
            return resp.text()
        })
    }

    public getCategories = (): Promise<Category[]> => {
        const promises = this.categories.map(this.getPictograms);
        return Promise.all(promises).then(this.buildCategories)
        .catch((e) => {
            console.error('retreiving the categories', e);
            return [];
        });
    }

    private buildCategories = (categories): Category[] => {
        return categories.map(this.getCategory);
    }

    private getCategory = (pictograms, categoryIndex): Category => {
        return {
            id: this.categories[categoryIndex],
            items: this.parseToJson(pictograms)
        }
    }

    private parseToJson = (data): Pictogram[] => {
        return parser.xml2json(data).xml.celda.map(celda => celda.pictograma).filter(pictograma => pictograma);
    }
}