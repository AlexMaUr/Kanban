import { Action, State, StateContext } from '@ngxs/store';
import { catchError, switchMap } from 'rxjs/operators';

import { IRequestsNestedState } from '../../requests.interface';
import { requestFailState, requestInitialState, requestLoadingState, requestSuccessState } from '../../../utils';
import { SignUpRequestAction, SignUpRequestFailAction, SignUpRequestSuccessAction } from './sign-up-request.actions';
import { SignUpFailAction, SignUpSuccessAction } from '../../../auth/auth.actions';
import { AuthService } from '../../../../core/services/auth.service';
import { SignInRequestFailAction, SignInRequestSuccessAction } from '../sign-in/sign-in-request.actions';

@State<IRequestsNestedState>({
  name: 'signUpRequestState',
  defaults: requestInitialState,
})
export class SignUpRequestState {

  constructor(
    private authService: AuthService,
  ) {
  }

  @Action(SignUpRequestAction)
  signUpRequest(ctx: StateContext<IRequestsNestedState>, action: SignUpRequestAction) {
    ctx.patchState(requestLoadingState);
    return this.authService.signUpRequest(action.payload)
      .then((res): any => {
        return res.user.getIdToken()
          .then((token) => {
            return ctx.dispatch(new SignUpRequestSuccessAction({res, token}));
          });
      }).catch((error) => {
        return ctx.dispatch(new SignUpRequestFailAction(error));
      });
  }

  @Action(SignUpRequestSuccessAction)
  signUpRequestSuccess(ctx: StateContext<IRequestsNestedState>, action: SignUpRequestSuccessAction) {
    ctx.patchState(requestSuccessState(action.payload));
    ctx.dispatch(new SignUpSuccessAction(action.payload));
  }

  @Action(SignUpRequestFailAction)
  signUpRequestFail(ctx: StateContext<IRequestsNestedState>, action: SignUpRequestFailAction) {
    ctx.patchState(requestFailState(action.payload));
    ctx.dispatch(new SignUpFailAction(action.payload));
  }

}
