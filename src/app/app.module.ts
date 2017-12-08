import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from "@ngrx/store";
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CoreModule} from "./core/core.module";
import {AppComponent} from "./core/containers";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule.forRoot({routerReducer: routerReducer}),
    // RouterModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([]),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
