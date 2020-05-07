import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { Pictogram, Category } from '@models/index';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnChanges {

  @Input()
  public item: Pictogram | Category;

  public customStyle: { [key: string]: string };
  public srcImage: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.customStyle = {
        border: `5px solid ${this.item['categoryColor'] || this.item.color }`,
      };
      this.srcImage = this.item['image'] ? `assets/arasaac/${this.item['categoryId']}/${this.item['image']}` : ''
    }
  }
}
