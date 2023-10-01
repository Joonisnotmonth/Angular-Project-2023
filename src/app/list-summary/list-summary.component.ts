import { Component } from '@angular/core';
import { List } from '../model/list.model';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.css'],
})
export class ListSummaryComponent {
  constructor(public list: List) {}
}
