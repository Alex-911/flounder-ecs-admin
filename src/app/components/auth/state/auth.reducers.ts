import { AuthModel } from '../model/auth.model';

import * as fromRoot from './../../../state/app.state';
import * as authActions from './auth.actions';

export interface AuthState {
  user: AuthModel | null;
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  auth: AuthState;
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

export function authReducer(
  state: AuthState = initialState,
  action: authActions.AuthAction
): AuthState {
  switch (action.type) {
    case authActions.AuthActionTypes.CHECK_AUTH: {
      return {
        ...state,
        loading: true,
      };
    }
    case authActions.AuthActionTypes.AUTHENTICATED: {
      return {
        ...state,
        loading: false,
        user: action.payload?.user!,
      };
    }
    case authActions.AuthActionTypes.UNAUTHENTICATED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error!,
      };
    }
    case authActions.AuthActionTypes.LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case authActions.AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload?.user!,
      };
    }
    case authActions.AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error!,
      };
    }
    case authActions.AuthActionTypes.LOGOUT: {
      return {
        ...state,
        loading: true,
      };
    }
    case authActions.AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: null,
      };
    }
    case authActions.AuthActionTypes.LOGOUT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error!,
      };
    }
    default:
      return state;
  }
}
