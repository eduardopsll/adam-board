import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pictogram, Category } from 'src/app/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  public items: Category[] | Pictogram[];

  @Output()
  public onItemSelected: EventEmitter<Pictogram | Category> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public itemSelected(item: Pictogram | Category) {
    this.onItemSelected.emit(item);
  }

}
