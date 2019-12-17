import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsStoreModule } from '../ngxs/ngxs.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    NgxsStoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ]
})
export class CoreModule { }
