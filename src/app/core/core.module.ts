import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsStoreModule } from '../ngxs/ngxs.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../../environments/environment';
import { VALIDATION, VALIDATION_VALUE } from './constants/validation.const';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    NgxsStoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    {
      provide: VALIDATION,
      useValue: VALIDATION_VALUE,
    },
  ],
})
export class CoreModule { }
