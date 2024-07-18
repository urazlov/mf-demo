import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'ng-mf-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li><a routerLink="/">First</a></li>
      <li><a routerLink="/second">Second Page</a></li>
      <li><a routerLink="/third">Third Page</a></li>
      <li><a routerLink="/fourth">Fourth Page</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
