import { Component, OnInit, Input } from "@angular/core";
import { Category, Pictogram, Sentence } from "src/app/models";
import { SentenceService } from "src/app/services";
import { CarouselEnum } from 'src/app/enums';
import { PromptUpdateService } from 'src/app/services/prompt.service';

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  @Input()
  public categories: Category[];
  @Input()
  public images: string[];

  public categorySelected: Category;
  public pictogramSentence: Sentence;
  public carouselType = CarouselEnum;
  public isDownloadMenuDisplayed = true;

  public shouldDisplayCategory: boolean = false;

  constructor(private sentenceService: SentenceService, private promptService: PromptUpdateService) {}

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

  public download() {
    this.promptService.get();
    this.closeDialog();
  }

  public imageLoaded(image) {
    console.log('IMAGE loaded '+image)
  }

  public closeDialog() {
    this.isDownloadMenuDisplayed = false;
  }

  private displayCategory() {
    this.shouldDisplayCategory = true;
  }

  private hideCategory() {
    this.categorySelected = undefined;
    this.shouldDisplayCategory = false;
  }
}
