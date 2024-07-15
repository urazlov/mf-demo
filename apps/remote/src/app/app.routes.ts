import { Routes } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry/entry.component';


export const MICROFRONTEDS_APP_ROUTES: Routes = [
    {
        path: 'remote',
        component: RemoteEntryComponent,
        pathMatch: 'full'
    }
];
