import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import { Pictogram, Category } from "@models/index";
import { TextToSpeechService } from "@services/index";

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

  constructor(private textToSpeech: TextToSpeechService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.customStyle = {
        border: `5px solid ${this.item["categoryColor"] || this.item.color}`,
      };
      this.srcImage = this.item["image"]
        ? `assets/arasaac/${this.item["categoryId"]}/${this.item["image"]}`
        : "";
    }
  }

  public clickCard() {
    this.textToSpeech.utterThis(this.item["texto"] || this.item["id"]);
    this.onItemSelected.emit(this.item);
  }
}
