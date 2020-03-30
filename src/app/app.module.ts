import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { DxPivotGridModule } from 'devextreme-angular';
import {PivotApiComponent} from './pivotapi.component';
@NgModule({
  declarations: [
    PivotApiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: PivotApiComponent, pathMatch: 'full'},
    ]),
    DxPivotGridModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [PivotApiComponent]
})
export class AppModule { }
