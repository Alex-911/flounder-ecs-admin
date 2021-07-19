import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { HomeProductModel } from '../models/homeProduct.model';

import * as homeActions from './appHome.actions';

import * as fromRoot from './../../../../state/app.state';

export interface AppHomeState extends EntityState<HomeProductModel> {
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  appHomePage: AppHomeState;
}

export const appHomeAdapter: EntityAdapter<HomeProductModel> =
  createEntityAdapter<HomeProductModel>();

const defaultState: AppHomeState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

const initialState: AppHomeState = appHomeAdapter.getInitialState(defaultState);

export function appHomeReducers(
  state: AppHomeState = initialState,
  actions: homeActions.AppHomeActions
) {
  switch (actions.type) {
    case homeActions.HomeActionType.GET_APP_HOME_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case homeActions.HomeActionType.GET_APP_HOME_PRODUCTS_SUCCESS: {
      return appHomeAdapter.setAll(actions.payload.products, {
        ...state,
        loading: false,
      });
    }
    case homeActions.HomeActionType.GET_APP_HOME_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: actions.payload.error,
      };
    }
    case homeActions.HomeActionType.ADD_APP_HOME_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case homeActions.HomeActionType.ADD_APP_HOME_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case homeActions.HomeActionType.ADD_APP_HOME_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: actions.payload.error,
      };
    }
    case homeActions.HomeActionType.UPDATE_APP_HOME_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case homeActions.HomeActionType.UPDATE_APP_HOME_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case homeActions.HomeActionType.UPDATE_APP_HOME_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: actions.payload.error,
      };
    }
    case homeActions.HomeActionType.DELETE_APP_HOME_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case homeActions.HomeActionType.DELETE_APP_HOME_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case homeActions.HomeActionType.DELETE_APP_HOME_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: actions.payload.error,
      };
    }
    default:
      return state;
  }
}
