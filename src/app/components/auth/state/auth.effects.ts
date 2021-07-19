import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private action$: Actions,
    private snackbar: MatSnackBar
  ) {}

  public checkAuth$ = createEffect(() => {
    return this.action$.pipe(
      ofType<authActions.CheckAuth>(authActions.AuthActionTypes.CHECK_AUTH),
      mergeMap((action: authActions.CheckAuth) => {
        return this.authService.checkAuth().pipe(
          map((user) => new authActions.Authenticated({ user: user })),
          catchError((err) =>
            of(new authActions.Unauthenticated({ error: err }))
          )
        );
      })
    );
  });

  public login$ = createEffect(() => {
    return this.action$.pipe(
      ofType<authActions.Login>(authActions.AuthActionTypes.LOGIN),
      mergeMap(async (action: authActions.Login) => {
        return this.authService
          .loginWithEmailAndPassword(
            action.payload.email,
            action.payload.password
          )
          .then((user) => new authActions.LoginSuccess({ user: user }))
          .catch((err) => new authActions.LoginFailure({ error: err }));
      })
    );
  });

  public logout$ = createEffect(() => {
    return this.action$.pipe(
      ofType<authActions.Logout>(authActions.AuthActionTypes.LOGOUT),
      mergeMap(async (action: authActions.Logout) => {
        return this.authService
          .logout()
          .then(() => {
            return new authActions.LogoutSuccess();
          })
          .catch((err) => {
            return new authActions.LogoutFailure({ error: err });
          });
      })
    );
  });
}
