import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { globalReducer } from './store/store.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ LOGIN: globalReducer }, {
      metaReducers: [localStorageSync({ keys: ['LOGIN'], rehydrate: true })]
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: APP_BASE_HREF, useValue: '/example-spa/login'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
