import { Route } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FirstPageComponent,
  },
  {
    path: 'second',
    component: SecondPageComponent,
  },
  {
    path: 'third',
    component: ThirdPageComponent
  },
  {
    path: 'fourth',
    component: FourthPageComponent
  }
];
