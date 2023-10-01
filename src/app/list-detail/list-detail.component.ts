import { Component } from '@angular/core';
import { List } from '../model/list.model';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css'],
})
export class ListDetailComponent {
  constructor(public list: List) {}
}
