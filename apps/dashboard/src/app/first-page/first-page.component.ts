import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DATA_SERVICE_TOKEN } from '@ng-mf/shared-services';
import { DynamicLoaderComponent } from '../dynamic/dynamic-loader.component';
import { FirstPageService } from '../services/first.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, DynamicLoaderComponent],
  providers: [{ provide: DATA_SERVICE_TOKEN, useClass: FirstPageService }],
  selector: 'ng-mf-first-page',
  template: `
    HELLO I AM FIRST PAGE
    <ng-mf-dynamic-loader></ng-mf-dynamic-loader>
    <router-outlet></router-outlet>
  `,
})
export class FirstPageComponent {}
