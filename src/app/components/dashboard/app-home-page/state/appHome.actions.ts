import { Action } from '@ngrx/store';
import { HomeProductModel } from '../models/homeProduct.model';

export enum HomeActionType {
  GET_APP_HOME_PRODUCTS = '[APP_HOME_PRODUCTS] GET APP_HOME_PRODUCTS',
  GET_APP_HOME_PRODUCTS_SUCCESS = '[APP_HOME_PRODUCTS] GET APP_HOME_PRODUCTS SUCCESS',
  GET_APP_HOME_PRODUCTS_FAILURE = '[APP_HOME_PRODUCTS] GET APP_HOME_PRODUCTS FAILURE',

  ADD_APP_HOME_PRODUCTS = '[APP_HOME_PRODUCTS] ADD APP_HOME_PRODUCTS',
  ADD_APP_HOME_PRODUCTS_SUCCESS = '[APP_HOME_PRODUCTS] ADD APP_HOME_PRODUCTS SUCCESS',
  ADD_APP_HOME_PRODUCTS_FAILURE = '[APP_HOME_PRODUCTS] ADD APP_HOME_PRODUCTS FAILURE',

  UPDATE_APP_HOME_PRODUCTS = '[APP_HOME_PRODUCTS] UPDATE APP_HOME_PRODUCTS',
  UPDATE_APP_HOME_PRODUCTS_SUCCESS = '[APP_HOME_PRODUCTS] UPDATE APP_HOME_PRODUCTS SUCCESS',
  UPDATE_APP_HOME_PRODUCTS_FAILURE = '[APP_HOME_PRODUCTS] UPDATE APP_HOME_PRODUCTS FAILURE',

  DELETE_APP_HOME_PRODUCTS = '[APP_HOME_PRODUCTS] DELETE APP_HOME_PRODUCTS',
  DELETE_APP_HOME_PRODUCTS_SUCCESS = '[APP_HOME_PRODUCTS] DELETE APP_HOME_PRODUCTS SUCCESS',
  DELETE_APP_HOME_PRODUCTS_FAILURE = '[APP_HOME_PRODUCTS] DELETE APP_HOME_PRODUCTS FAILURE',
}

export class GetAppHomeProducts implements Action {
  readonly type = HomeActionType.GET_APP_HOME_PRODUCTS;
}
export class GetAppHomeProductsSuccess implements Action {
  readonly type = HomeActionType.GET_APP_HOME_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      products: HomeProductModel[];
    }
  ) {}
}
export class GetAppHomeProductsFailure implements Action {
  readonly type = HomeActionType.GET_APP_HOME_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class AddAppHomeProducts implements Action {
  readonly type = HomeActionType.ADD_APP_HOME_PRODUCTS;
  constructor(
    public payload: {
      product: HomeProductModel;
    }
  ) {}
}
export class AddAppHomeProductsSuccess implements Action {
  readonly type = HomeActionType.ADD_APP_HOME_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class AddAppHomeProductsFailure implements Action {
  readonly type = HomeActionType.ADD_APP_HOME_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class UpdateAppHomeProducts implements Action {
  readonly type = HomeActionType.UPDATE_APP_HOME_PRODUCTS;
  constructor(
    public payload: {
      product: HomeProductModel;
    }
  ) {}
}
export class UpdateAppHomeProductsSuccess implements Action {
  readonly type = HomeActionType.UPDATE_APP_HOME_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class UpdateppHomeProductsFailure implements Action {
  readonly type = HomeActionType.UPDATE_APP_HOME_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class DeleteAppHomeProducts implements Action {
  readonly type = HomeActionType.DELETE_APP_HOME_PRODUCTS;
  constructor(
    public payload: {
      product: HomeProductModel;
    }
  ) {}
}
export class DeleteAppHomeProductsSuccess implements Action {
  readonly type = HomeActionType.DELETE_APP_HOME_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class DeleteAppHomeProductsFailure implements Action {
  readonly type = HomeActionType.DELETE_APP_HOME_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type AppHomeActions =
  | GetAppHomeProducts
  | GetAppHomeProductsSuccess
  | GetAppHomeProductsFailure
  | AddAppHomeProducts
  | AddAppHomeProductsSuccess
  | AddAppHomeProductsFailure
  | UpdateAppHomeProducts
  | UpdateAppHomeProductsSuccess
  | UpdateppHomeProductsFailure
  | DeleteAppHomeProducts
  | DeleteAppHomeProductsSuccess
  | DeleteAppHomeProductsFailure;
