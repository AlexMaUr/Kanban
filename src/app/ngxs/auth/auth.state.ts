import { Action, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {
  LogoutAction,
  SignInAction,
  SignInFailAction,
  SignInSuccessAction,
  SignUpAction,
  SignUpFailAction,
  SignUpSuccessAction,
} from './auth.actions';
import { SignUpRequestAction } from '../requests/auth/sign-up/sign-up-request.actions';
import { SignInRequestAction } from '../requests/auth/sign-in/sign-in-request.actions';
import { SessionService } from '../../core/services/session.service';
import { SnackService } from '../../core/services/snack.service';

export interface AuthStateModel {
  // isSignInFormCorrect: boolean;
  userMe: any;
  isGuest: boolean;
  token: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    // isSignInFormCorrect: true,
    userMe: null,
    isGuest: null,
    token: null,
  },
})
export class AuthState {

  constructor(
    private sessionService: SessionService,
    private snackService: SnackService,
  ) {
  }

  @Action(SignUpAction)
  signUp(ctx: StateContext<AuthStateModel>, action: SignUpAction) {
    ctx.dispatch(new SignUpRequestAction(action.payload));
  }

  @Action(SignUpSuccessAction)
  signUpSuccess(ctx: StateContext<AuthStateModel>, action: SignUpSuccessAction) {
    ctx.patchState({
      userMe: action.payload.res.user,
      token: action.payload.token,
      isGuest: false,
    });
    this.sessionService.setToken(action.payload.token);
    ctx.dispatch(new Navigate(['/desks']));
  }

  @Action(SignUpFailAction)
  signUpFail(ctx: StateContext<AuthStateModel>, action: SignUpFailAction) {
    this.snackService.showSnack(action.payload.message, 4000, 'error');
  }

  @Action(SignInAction)
  signIn(ctx: StateContext<AuthStateModel>, action: SignInAction) {
    ctx.dispatch(new SignInRequestAction(action.payload));
  }

  @Action(SignInSuccessAction)
  signInSuccess(ctx: StateContext<AuthStateModel>, action: SignInSuccessAction) {
    ctx.patchState({
      userMe: action.payload.res.user,
      token: action.payload.token,
      isGuest: false,
    });
    this.sessionService.setToken(action.payload.token);
    ctx.dispatch(new Navigate(['/desks']));
  }

  @Action(SignInFailAction)
  signInFail(ctx: StateContext<AuthStateModel>, action: SignInFailAction) {
    this.snackService.showSnack(action.payload.message, 4000, 'error');
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<AuthStateModel>) {
    this.sessionService.removeToken();
    ctx.patchState({
      isGuest: true,
      userMe: null,
      token: null,
    });
  }
}
