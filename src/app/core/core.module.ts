import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {containers as coreContainers, AppComponent} from "./containers";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [coreContainers]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
