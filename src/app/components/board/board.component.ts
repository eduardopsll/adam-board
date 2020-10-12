import { Component, OnInit, Input } from "@angular/core";
import { Category, Pictogram, Sentence } from "src/app/models";
import { SentenceService } from "src/app/services";
import { CarouselEnum } from 'src/app/enums';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

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
  public isDownloadingImages = false;

  public shouldDisplayCategory: boolean = false;

  constructor(
    private sentenceService: SentenceService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

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

  public imageLoaded(image) {
    console.log('IMAGE loaded '+image)
  }

  private displayCategory() {
    this.shouldDisplayCategory = true;
  }

  private hideCategory() {
    this.categorySelected = undefined;
    this.shouldDisplayCategory = false;
  }

  private openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
  }
}
