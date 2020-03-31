
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {PivotApiComponent} from './pivotapi.component';


import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxPivotGridModule } from 'devextreme-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    PivotApiComponent
  ],
  imports: [

    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: PivotApiComponent, pathMatch: 'full'},
    ]),

    TransferHttpCacheModule,
    DxPivotGridModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [PivotApiComponent],
//  bootstrap: [PivotApiComponent]
})

export class AppElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(PivotApiComponent, { injector });
    customElements.define('app-pivot', myElement);
  }
  ngDoBootstrap() {}
}


