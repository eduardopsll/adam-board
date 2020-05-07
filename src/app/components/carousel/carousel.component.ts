import { Component, OnInit, Input } from '@angular/core';
import { Pictogram, Category } from 'src/app/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input()
  public items: Category[] | Pictogram[];

  constructor() { }

  ngOnInit() {
  }

}
