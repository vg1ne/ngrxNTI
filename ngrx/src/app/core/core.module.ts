import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppComponent} from "./containers/app.component";

export const components = [
  AppComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [components]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
