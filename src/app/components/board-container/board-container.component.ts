import { Component, OnInit, Input } from '@angular/core';
import { ArasaacService } from 'src/app/services/arasaac.service';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss']
})
export class BoardContainerComponent implements OnInit {

  @Input()
  categories: Category[];

  constructor(private arasaacService: ArasaacService) { }

  ngOnInit() {
    this.arasaacService.getCategories().then(data => {
      this.categories = data;
    });
  }

}
