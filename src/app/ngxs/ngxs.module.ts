import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { environment } from '../../environments/environment';
import { AuthState } from './auth';
import { RequestsState } from './requests/requests.state';
import { SignInRequestState } from './requests/auth/sign-in/sign-in-request.state';
import { SignUpRequestState } from './requests/auth/sign-up/sign-up-request.state';


@NgModule({
  imports: [
    NgxsModule.forRoot([
      AuthState,
      // requests
      RequestsState,
      SignInRequestState,
      SignUpRequestState,
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })
  ]
})
export class NgxsStoreModule { }
