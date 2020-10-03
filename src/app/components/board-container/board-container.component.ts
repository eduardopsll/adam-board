import { Component, OnInit, Input } from '@angular/core';
import { ArasaacService } from 'src/app/services';
import { Category } from 'src/app/models/category.model';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {

  @Input()
  categories: Category[];

  public images: SafeUrl[] = []

  constructor(private arasaacService: ArasaacService) { }

  ngOnInit() {
    this.arasaacService.getCategories().then(data => {
      this.categories = data;
      data.forEach((category) => category.items.forEach(item => this.images.push(`${item["categoryId"]}/${item["image"]}`)));
    });
  }

}
