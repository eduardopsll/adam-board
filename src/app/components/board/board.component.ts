import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { Category, Pictogram, Sentence } from "src/app/models";
import { SentenceService } from "src/app/services";
import { CarouselEnum } from 'src/app/enums';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit, OnChanges {
  @Input()
  public categories: Category[];

  public categoryIndexSelected: number;
  public pictogramSentence: Sentence;
  public carouselType = CarouselEnum;
  public isDownloadingImages = false;
  public shouldDisplayCategory: boolean = false;

  private sentenceCategory: Category;

  constructor(
    private sentenceService: SentenceService,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef) {
      this.categoryIndexSelected = 0;
      this.sentenceCategory = {
        id: 'sentence',
        color: 'white',
        text: 'Frase',
        items: []
      };
    }

  ngOnInit() {
    this.openDialog();
  }

  public ngOnChanges(change: SimpleChanges) {
    if(change.categories) {
      this.categories = [this.sentenceCategory, ...this.categories];
    }
  }

  public onCategorySelected(index: number) {
    this.categoryIndexSelected = index;
  }

  public onPictogramSelected(pictogram: Pictogram) {
    this.sentenceService.addPictogram(pictogram);
    this.sentenceCategory.items = [
      ...this.sentenceService.getSentence().pictograms
    ];
    this.selectTabByIndex(0);
  }

  public back() {
    this.sentenceService.removePictogram();
    this.sentenceCategory.items = this.sentenceService.getSentence().pictograms;
    this.selectTabByIndex(0);
  }

  public play() {
    this.sentenceService.readSentence();
    this.selectTabByIndex(0);
  }

  public reset() {
    this.sentenceService.resetSentence();
    this.sentenceCategory.items = this.sentenceService.getSentence().pictograms;
    this.selectTabByIndex(0);
  }

  private selectTabByIndex = (index: number) => {
    this.categoryIndexSelected = index;
    this.cdRef.detectChanges();
  }

  private openDialog() {
    // const dialogRef = this.dialog.open(DialogComponent);
  }
}
