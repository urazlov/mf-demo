import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DynamicLoaderComponent } from './dynamic/dynamic-loader.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, DynamicLoaderComponent],
  selector: 'ng-mf-root',
  template: `
    <ul>
      <li><a routerLink="/">First</a></li>
      <li><a routerLink="/second">Second Page</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
