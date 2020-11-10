import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Pictogram, Category } from 'src/app/models';
import { CarouselEnum } from 'src/app/enums';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  public items: Category[] | Pictogram[];
  @Input()
  public itemSelected: Category | Pictogram;
  @Input()
  public type: CarouselEnum = CarouselEnum.Categories;

  @Output()
  public onItemSelected: EventEmitter<Pictogram | Category> = new EventEmitter();

  public carouselType = CarouselEnum;
  public multiple = false;

  constructor() { }

  ngOnInit() {
  }

  public onItemClick(item: Pictogram | Category) {
    this.onItemSelected.emit(item);
  }

}
