import { Component, OnInit, Input } from "@angular/core";
import { Category, Pictogram, Sentence } from "src/app/models";
import { SentenceService } from "@services/index";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  @Input()
  public categories: Category[];

  public categorySelected: Category;
  public pictogramSentence: Sentence;

  public shouldDisplayCategory: boolean = false;

  constructor(private sentenceService: SentenceService) {}

  ngOnInit() {}

  public onCategorySelected(item: Category) {
    this.categorySelected = item;
    this.displayCategory();
  }

  public onPictogramSelected(pictogram: Pictogram) {
    this.sentenceService.addPictogram(pictogram);
    this.pictogramSentence = this.sentenceService.getPictogramSentence();
    this.hideCategory();
  }

  public play() {
    this.sentenceService.readSentence();
  }

  public reset() {
    this.sentenceService.resetSentence();
    this.pictogramSentence = this.sentenceService.getPictogramSentence();
  }

  private displayCategory() {
    this.shouldDisplayCategory = true;
  }

  private hideCategory() {
    this.shouldDisplayCategory = false;
  }
}
