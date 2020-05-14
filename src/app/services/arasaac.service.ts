import parser from "xml2json-light";
import { Injectable } from "@angular/core";
import { Pictogram, Category } from "src/app/models";
import { CategoryEnum } from "src/app/enums";
import { PictogramAsset } from "src/app/models/pictogram-asset.model";

@Injectable({
  providedIn: "root",
})
export class ArasaacService {
  private categories = [
    CategoryEnum.Days,
    CategoryEnum.Months,
    CategoryEnum.Emotions,
  ];

  /* 
  * TODO: 
  * María should defined with color should be use for 
  * each category
  * Color are also defined in base.scss
  */
  private categoriesColor = {
      [CategoryEnum.Days]: '#E69749',
      [CategoryEnum.Months]: '#1B7EB7',
      [CategoryEnum.Emotions]: '#076A3F'

  }

  constructor() {}

  public getPictograms = (categoryName) => {
    return fetch(
      `../assets/arasaac/${categoryName}/tablero_comunicacion.xml`
    ).then((resp) => {
      return resp.text();
    });
  };

  public getCategories = (): Promise<Category[]> => {
    const promises = this.categories.map(this.getPictograms);
    return Promise.all(promises)
      .then(this.buildCategories)
      .catch((e) => {
        console.error("retreiving the categories", e);
        return [];
      });
  };

  private buildCategories = (categories: any): Category[] => {
    return categories.map(this.getCategory);
  };

  private getCategory = (pictograms, categoryIndex): Category => {
    const categoryId = this.categories[categoryIndex];
    const categoryColor = this.categoriesColor[categoryId];
    return {
      id: categoryId,
      color: categoryColor,
      text: categoryId,
      items: this.parseToJson(pictograms).map(
        this.convertToPictogramByCategory(categoryId, categoryColor)
      ),
    };
  };

  private convertToPictogramByCategory = (
    categoryId: string,
    categoryColor: string
  ): ((value: PictogramAsset) => Pictogram) => (
    pictogramAsset: PictogramAsset
  ): Pictogram => ({
    audio: pictogramAsset.audio,
    subcategoryNum: pictogramAsset.categoria,
    color: pictogramAsset.color,
    image: pictogramAsset.imagen,
    text: pictogramAsset.texto,
    categoryId,
    categoryColor
  });

  private parseToJson = (data): PictogramAsset[] => {
    return parser
      .xml2json(data)
      .xml.celda.map((celda) => celda.pictograma)
      .filter((pictograma) => pictograma);
  };
}
