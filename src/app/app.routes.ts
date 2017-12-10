import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalendarComponent} from "./calendar/containers/calendar.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
