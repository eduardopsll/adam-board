import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input()
  public categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
