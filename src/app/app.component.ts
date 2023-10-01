import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<header>
      <div class="nav">
        <a href="" class="logo" herf="#" routerLink="/">Angular Project App</a>
        <app-list-summary></app-list-summary>
      </div>
    </header>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project';
}
