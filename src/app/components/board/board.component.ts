import { Component, OnInit, Input } from "@angular/core";
import { Category, Pictogram, Sentence } from "src/app/models";
import { SentenceService } from "@services";
import { CarouselEnum } from '@enums';

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
  public carouselType = CarouselEnum;

  public shouldDisplayCategory: boolean = false;

  constructor(private sentenceService: SentenceService) {}

  ngOnInit() {}

  public onCategorySelected(item: Category) {
    if (this.categorySelected && this.categorySelected.id === item.id) {
      this.hideCategory();
    } else {
      this.categorySelected = item;
      this.displayCategory();
    }
  }

  public onPictogramSelected(pictogram: Pictogram) {
    this.sentenceService.addPictogram(pictogram);
    this.pictogramSentence = this.sentenceService.getPictogramSentence();
    this.hideCategory();
  }

  public back() {
    this.sentenceService.removePictogram();
    this.pictogramSentence = this.sentenceService.getPictogramSentence();
    this.hideCategory();
  }

  public play() {
    this.sentenceService.readSentence();
    this.hideCategory();
  }

  public reset() {
    this.sentenceService.resetSentence();
    this.pictogramSentence = this.sentenceService.getPictogramSentence();
    this.hideCategory();
  }

  private displayCategory() {
    this.shouldDisplayCategory = true;
  }

  private hideCategory() {
    this.categorySelected = undefined;
    this.shouldDisplayCategory = false;
  }
}
