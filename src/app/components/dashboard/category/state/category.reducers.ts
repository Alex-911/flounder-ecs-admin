import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CategoryModel } from '../models/category.model';
import * as categoryAction from './category.actions';
import * as fromRoot from './../../../../state/app.state';

export interface CategoryState extends EntityState<CategoryModel> {
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  category: CategoryState;
}

export const categoryAdapter: EntityAdapter<CategoryModel> =
  createEntityAdapter<CategoryModel>();

const defaultState: CategoryState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

const initialState: CategoryState =
  categoryAdapter.getInitialState(defaultState);

export function categoryReducer(
  state: CategoryState = initialState,
  action: categoryAction.CategoryActions
) {
  switch (action.type) {
    case categoryAction.CategoryActionType.GET_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case categoryAction.CategoryActionType.GET_CATEGORY_SUCCESS: {
      return categoryAdapter.setAll(action.payload.categories, {
        ...state,
        loading: false,
      });
    }
    case categoryAction.CategoryActionType.GET_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case categoryAction.CategoryActionType.ADD_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case categoryAction.CategoryActionType.ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case categoryAction.CategoryActionType.ADD_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case categoryAction.CategoryActionType.UPDATE_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case categoryAction.CategoryActionType.UPDATE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case categoryAction.CategoryActionType.UPDATE_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case categoryAction.CategoryActionType.DELETE_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case categoryAction.CategoryActionType.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case categoryAction.CategoryActionType.DELETE_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
