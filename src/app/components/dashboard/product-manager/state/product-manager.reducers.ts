import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductModel } from '../models/product.model';
import * as fromRoot from './../../../../state/app.state';
import * as prodActions from './product-manager.actions';

export interface ProductManagerState extends EntityState<ProductModel> {
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  productManager: ProductManagerState;
}

export const productAdapter: EntityAdapter<ProductModel> =
  createEntityAdapter<ProductModel>();

export const defaultState: ProductManagerState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const initialState: ProductManagerState =
  productAdapter.getInitialState(defaultState);

export function productManagerReducer(
  state: ProductManagerState = initialState,
  action: prodActions.ProductManagerActions
): ProductManagerState {
  switch (action.type) {
    case prodActions.ProductActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.GET_PRODUCTS_SUCCESS: {
      return productAdapter.setAll(action.payload.products, {
        ...state,
        loading: false,
      });
    }
    case prodActions.ProductActionTypes.GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.GET_NEXT_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.GET_NEXT_PRODUCTS_SUCCESS: {
      return productAdapter.setAll(action.payload.products, {
        ...state,
        loading: false,
      });
    }
    case prodActions.ProductActionTypes.GET_NEXT_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.GET_PREVIOUS_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.GET_PREVIOUS_PRODUCTS_SUCCESS: {
      return productAdapter.setAll(action.payload.products, {
        ...state,
        loading: false,
      });
    }
    case prodActions.ProductActionTypes.GET_PREVIOUS_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.ADD_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.ADD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case prodActions.ProductActionTypes.ADD_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.UPDATE_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.UPDATE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case prodActions.ProductActionTypes.UPDATE_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.DELETE_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case prodActions.ProductActionTypes.DELETE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case prodActions.ProductActionTypes.DELETE_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
}
