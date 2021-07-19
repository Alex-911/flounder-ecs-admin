import { Action } from '@ngrx/store';
import { AuthModel } from '../model/auth.model';

export enum AuthActionTypes {
  CHECK_AUTH = '[AUTH] CHECK AUTH',
  AUTHENTICATED = '[AUTH] AUTHENTICATED',
  UNAUTHENTICATED = '[AUTH] UNAUTHENTICATED',

  LOGIN = '[AUTH] LOGIN',
  LOGIN_SUCCESS = '[AUTH] LOGIN SUCCESS',
  LOGIN_FAILURE = '[AUTH] LOGIN FAILURE',

  LOGOUT = '[AUTH] LOGOUT',
  LOGOUT_SUCCESS = '[AUTH] LOGOUT SUCCESS',
  LOGOUT_FAILURE = '[AUTH] LOGOUT FAILURE',
}

export class CheckAuth implements Action {
  readonly type = AuthActionTypes.CHECK_AUTH;
}

export class Authenticated implements Action {
  readonly type = AuthActionTypes.AUTHENTICATED;
  constructor(public payload: { user: AuthModel | null }) {}
}

export class Unauthenticated implements Action {
  readonly type = AuthActionTypes.UNAUTHENTICATED;
  constructor(public payload: { error: string }) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(
    public payload: {
      email: string;
      password: string;
    }
  ) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: AuthModel | null }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
}

export class LogoutFailure implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type AuthAction =
  | CheckAuth
  | Authenticated
  | Unauthenticated
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutSuccess
  | LogoutFailure;
