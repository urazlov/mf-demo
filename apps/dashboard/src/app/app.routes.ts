import { Route } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FirstPageComponent,
  },
  {
    path: 'second',
    component: SecondPageComponent,
  },
];
