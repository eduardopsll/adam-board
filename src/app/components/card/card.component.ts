import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { Pictogram, Category } from "@models";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnChanges {
  @Input()
  public item: Pictogram | Category;

  @Output()
  public onItemSelected: EventEmitter<
    Pictogram | Category
  > = new EventEmitter();

  public customStyle: { [key: string]: string };
  public srcImage: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.customStyle = {
        border: `2px solid ${this.item["categoryColor"] || this.item.color}`,
        backgroundColor: this.item["categoryColor"] ? '#FFF' : this.item.color
      };
      this.srcImage = this.item["image"]
        ? `assets/arasaac/${this.item["categoryId"]}/${this.item["image"]}`
        : "";
    }
  }

  public clickCard() {
    this.onItemSelected.emit(this.item);
  }
}
