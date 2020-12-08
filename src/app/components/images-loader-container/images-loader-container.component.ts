import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models';
import { ImagesService } from 'src/app/services';

@Component({
  selector: 'app-images-loader-container',
  templateUrl: './images-loader-container.component.html',
  styleUrls: ['./images-loader-container.component.scss']
})
export class ImagesLoaderContainerComponent implements OnChanges {

  @Input()
  public categories: Category[];

  public images$: Observable<string[]> = of([]);
  public images: string[] = [];

  constructor(private imagesService: ImagesService) { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.categories) {
      this.images$ = this.imagesService.set(this.categories.reduce((acc, category) => [
        ...acc,
        ...category.items
      ], []));
    this.images$.subscribe(value => this.images = value);
    }
  }
  

  public imageLoaded() {
    this.imagesService.updateCounter();
  }

}
